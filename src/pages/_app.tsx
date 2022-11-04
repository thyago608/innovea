import { Header } from "components/Header";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "services/queryClient";
import type { AppProps } from "next/app";
import "styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
