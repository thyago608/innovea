import Head from "next/head";
import { GetServerSideProps } from "next";
import { Article } from "components/Article";
import { api } from "services/api";
import { convertISODate } from "utils/convertDate";
import { ArticlesApiData, ArticleData } from "types/Article";

interface HomeProps {
  articles: ArticleData[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <main className="min-h-screen max-w-[1000px] my-8 mx-auto">
      <Head>
        <title>Innovea | Home</title>
      </Head>
      <section className="flex flex-col gap-4">
        {articles.map((item) => (
          <Article key={item.url} data={item} />
        ))}
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<ArticlesApiData>(
    `top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
  );

  const articlesFormatted = response.data.articles.map((item) => ({
    ...item,
    publishedAt: convertISODate(item.publishedAt),
  }));

  return {
    props: {
      articles: articlesFormatted,
    },
  };
};
