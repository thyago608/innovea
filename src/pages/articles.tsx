import Head from "next/head";
import { Article } from "components/Article";
import { useState } from "react";
import { useFetchArticles } from "hooks/useFetchArticles";

export default function Articles() {
  const [page, setPage] = useState(1);
  const { data } = useFetchArticles(page);

  function handleNextPage() {
    setPage((oldState) => oldState + 1);
  }

  return (
    <main className="min-h-screen max-w-[1000px] my-8 mx-auto">
      <Head>
        <title>Innovea | Home</title>
      </Head>
      <section className="flex flex-col gap-4">
        {data?.map((item) => (
          <Article key={item.url} data={item} />
        ))}
      </section>
      <button
        type="button"
        className="block bg-cyan-500 h-12 px-5 rounded-full mx-auto mt-10 text-zinc-800 hover:bg-cyan-400 transition-background duration-200"
        onClick={handleNextPage}
      >
        Carregar mais artigos
      </button>
    </main>
  );
}
