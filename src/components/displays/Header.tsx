export default function Header() {
  return (
    <header class="flex items-center gap-4 text-xl h-25 bg-black fixed z-999 w-full px-25 children:block text-white">
      <a href="https://www.abstract.com/">
        <img src="/logo.svg" class="h-8" alt="home page" />
      </a>
      <a href="/" class="hocus:underline mr-auto border-l-2 pl-2">
        Help Center
      </a>
      <button type="button" class="bg-zinc-800 border-(1 white) p-(y2 x6) rounded-lg">Submit a request</button>
      <button type="button" class="bg-indigo-600 rounded-lg p-(y2 x6)">Sign in</button>
    </header>
  );
}
