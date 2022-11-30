import type {AppProps} from "next/app";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {Layout} from "@/Layout";

import "@/styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
