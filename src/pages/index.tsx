import Head from "next/head";
import { Article } from "components/Article";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1000px] my-8 mx-auto">
      <Head>
        <title>Innovea | Home</title>
      </Head>
      <section className="flex flex-col gap-4">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>
    </main>
  );
}
