import Counter from '~/components/Counter';

export default function Home() {
  return (
    <main class="text-center p-4 mx-auto bg-[#121212] text-white min-h-screen">
      <div class="opacity-60">
        <img src="/logo.svg" alt="logo" class="h-80 animate-pulse animate-duration-6s mx-auto" />
      </div>
      <h1 class="text-[#335d92] uppercase text-4rem font-100 m-(x-auto b8) max-lg:max-w-56">Hello world!</h1>
      <Counter />
      <p class="max-lg:max-w-56 m-(y4 x-auto)">
        {'Visit '}
        <a href="https://start.solidjs.com" target="_blank" class="mr-4" rel="noreferrer">
          start.solidjs.com
        </a>
        {' to learn how to build SolidStart apps.'}
      </p>
    </main>
  );
}
