import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
  presetUno,
  presetWebFonts,
  presetIcons,
} from 'unocss';
import * as fs from 'fs';
import * as path from 'path';
import { theme } from './tailwind.config.cjs';

const shortcuts: [string, string][] = [

];

const config = defineConfig({
  shortcuts,
  // WebStorm don't support unocss config, so theme put in tailwind.config.cjs
  theme: {
    ...theme.extend,
  },
  rules: [
    ['content-fill', { content: '"_"' }],
    [/^((min|max)-)?size-(screen|(\d+)(.+))?$/, ([matcher]) => {
      const [type, sizePart] = matcher.split('size-');
      if (sizePart == 'screen') return { [`${type}width`]: '100vw', [`${type}height`]: '100vh' };
      let size = sizePart;
      if (/^\d$/.test(sizePart)) size = `${Number(sizePart) / 4}rem`;
      else if (sizePart.includes('/')) {
        const [prev, suf] = sizePart.split('/');
        const percent = (100 * Number(prev)) / Number(suf);
        size = `${percent}%`;
      }

      return { [`${type}width`]: size, [`${type}height`]: size };
    }],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('group-ui-')) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const state = variant.replace('group-ui-', '');

      return {
        selector: (s) => `.group[data-headlessui-state*="${state}"] ${s}`,
        matcher: rest.join(':'),
      };
    },
    (matcher) => {
      if (!matcher.startsWith('ui-')) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const state = variant.replace('ui-', '');

      return {
        selector: (s) => `${s}[data-headlessui-state*="${state}"]`,
        matcher: rest.join(':'),
      };
    },
    (matcher) => {
      if (!matcher.startsWith('noui-')) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const state = variant.replace('noui-', '');

      return {
        selector: (s) => `${s}:not([data-headlessui-state*="${state}"])`,
        matcher: rest.join(':'),
      };
    },
    // Match data and aria values
    (matcher) => {
      if (!['aria-', 'data-'].some((v) => matcher.startsWith(v))) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const index = matcher.indexOf('[');
      const value = index != -1 ? matcher.slice(index + 1, matcher.indexOf(']')) : 'true';
      const selector = variant.replace(/-\[.+]$/, '');

      return {
        selector: (s) => `${s}[${selector}="${value}"]`,
        matcher: rest.join(':'),
      };
    },
    (matcher) => {
      if (!matcher.startsWith('max-')) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const mediaPx = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
      }[variant.replace('max-', '')] || 0;

      if (mediaPx == 0) return matcher;

      return {
        matcher: rest.join(':'),
        parent: `@media (max-width: ${mediaPx}px)`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('hocus:')) return matcher;

      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover, ${s}:focus`,
      };
    },
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: 'auto',
        'min-height': '1em',
        'white-space': 'nowrap',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});

// Create mock file for auto-complete
fs.writeFileSync(
  path.join(__dirname, '/src/assets/style/mock.css'),
  shortcuts.map(([name]) => `.${name} {}`).join('\n'),
);

export default config;
