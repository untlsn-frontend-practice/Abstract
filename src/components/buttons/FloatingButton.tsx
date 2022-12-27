export default function FloatingButton() {
  return (
    <button type="button" class="rounded-full bg-indigo-600 p-(y2 x6) fixed z-999 bottom-4 right-4 text-white font-bold before:(content-fill i-bi-question-circle text-lg)">
      {' Help'}
    </button>
  );
}
