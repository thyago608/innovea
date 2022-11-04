import Link from "next/link";

export function Article() {
  return (
    <Link
      href="/"
      className="flex flex-col px-4 py-4 border border-b-slate-50 md:px-6 md:py-6"
    >
      <time className="text-sm text-zinc-500">12 de março de 2021</time>
      <strong className="mt-3 mb-1 text-lg text-zinc-800 lg:text-xl">
        Creating a Monorepo with Lerna & Yarn Workspaces
      </strong>
      <p className="text-sm text-zinc-800 lg:text-base">
        In this guide, you will learn how to create a Monorepo to manage
        multiple packages with a shared build, test, and release process.
      </p>
    </Link>
  );
}
