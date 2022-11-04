import Link from "next/link";
import { INewsApiArticle } from "ts-newsapi/lib/types";

interface ArticleProps {
  data: INewsApiArticle;
}

export function Article({ data }: ArticleProps) {
  return (
    <Link
      href={data.url}
      className="flex flex-col px-4 py-4 rounded border-b-[1px] md:px-6 md:py-6 transition-background hover:bg-slate-100"
    >
      <div
        className={`w-full h-96 bg-cover bg-top mb-3`}
        style={{
          backgroundImage: `url('${data.urlToImage}')`,
        }}
      />
      <strong className="mb-3 text-lg text-zinc-800 lg:text-xl">
        {data.title}
      </strong>
      <p className="text-sm text-zinc-800 lg:text-base">{data.description}</p>
      <div className="flex flex-col items-center gap-6 mt-5 md:flex-row">
        <time className="text-sm text-zinc-500">{data.publishedAt}</time>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-zinc-700">por:</span>
          <address className="text-sm text-zinc-500">
            {data.author ? data.author : "John Doe"}
          </address>
        </div>
      </div>
    </Link>
  );
}
