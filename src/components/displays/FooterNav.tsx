type FooterNavProps = {
  title: string,
  links: { label: string, link: string }[],
  children?: any,
}

export default function FooterNav(props: FooterNavProps) {
  return (
    <nav class="space-y-4">
      <h1 class="font-bold text-xl">{props.title}</h1>
      <ul>
        <For each={props.links}>
          {(linkProps) => (
            <li>
              <a class="hocus:underline" href={linkProps.link}>
                {linkProps.label}
              </a>
            </li>
          )}
        </For>
      </ul>
      {props.children}
    </nav>
  );
}
