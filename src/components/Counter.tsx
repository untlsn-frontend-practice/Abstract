export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button
      class="p-(y4 x8) text-[#2EAEA5] bg-[#017B72]/10 rounded-full border-(2 transparent) w-50 tabular-nums outline-none active:bg-opacity-20 hover:border-[#017B72]/50"
      onClick={() => setCount((v) => v + 1)}
    >
      Clicks: {count}
    </button>
  );
}
