import Image from "next/image";
import Link from "next/link";
import { ArticleData } from "types/Article";

interface ArticleProps {
  data: ArticleData;
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
      <time className="text-sm text-zinc-500">{data.publishedAt}</time>
      <strong className="mt-3 mb-2 text-lg text-zinc-800 lg:text-xl">
        {data.title}
      </strong>
      <p className="text-sm text-zinc-800 lg:text-base">{data.description}</p>
    </Link>
  );
}
