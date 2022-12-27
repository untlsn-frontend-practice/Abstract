type LearnMoreBlockProps = {
  title: string,
  description: string,
  link: string,
  img: string,
}

export default function LearnMoreBlock(props: LearnMoreBlockProps) {
  return (
    <section class="grid-(~ cols-[6rem_auto]) gap-4 text-xl">
      <img src={props.img} alt={props.title} class="row-span-3" />
      <h1 class="font-bold">{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link} class="text-indigo-600 hocus:underline">
        {'Learn More '}
        <i class="i-bi-arrow-right" aria-hidden>arrow</i>
      </a>
    </section>
  );
}
