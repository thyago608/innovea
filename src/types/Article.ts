export interface ArticleData {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface ArticlesApiData {
  totalResults: number;
  articles: ArticleData[];
}
