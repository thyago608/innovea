import { useQuery } from "@tanstack/react-query";
import { newsAPI } from "services/newsAPI";
import { INewsApiArticle } from "ts-newsapi/lib/types";
import { convertISODate } from "utils/convertDate";

const LIMIT_PER_PAGE = 5;

export function formatArticles(articles: INewsApiArticle[]) {
  return articles.map((article) => {
    return {
      ...article,
      publishedAt: convertISODate(article.publishedAt),
    };
  });
}

export async function getArticles(page: number) {
  const topHeadlines = await newsAPI.getEverything({
    q: "stocks",
    qInTitle: "stock",
    sources: ["bbc-news"],
    language: "en",
    sortBy: "relevancy",
    pageSize: LIMIT_PER_PAGE,
    page,
  });

  const topHeadLinesFormatted = formatArticles(topHeadlines.articles);

  return topHeadLinesFormatted;
}

export function useFetchArticles(page: number) {
  return useQuery(["articles", page], () => getArticles(page), {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
