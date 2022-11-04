import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1000px] px-5 my-20 mx-auto grid justify-center items-center gap-10 md:gap-12 lg:grid-cols-2">
      <Head>
        <title>Innovea | Home</title>
      </Head>
      <section className="flex flex-col gap-4 items-center">
        <span className="text-xl font-semibold text-zinc-900 md:text-2xl lg:text-4xl">
          Innovea Blog
        </span>
        <p className="text-center text-zinc-700">
          Fique por dentro das notícias mais recentes do mundo.
        </p>
        <Link
          href="/articles"
          className="flex items-center justify-center w-44 h-10 rounded-full bg-cyan-500 text-white text-sm lg:text-base hover:bg-cyan-600 transition-background"
        >
          Clique aqui
        </Link>
      </section>
      <Image src="/hero.svg" alt="" width={500} height={300} title="artigos" />
    </main>
  );
}
