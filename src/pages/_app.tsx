import type {AppProps} from "next/app";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {atom, Provider} from "jotai";

import {Layout} from "@/Layout";

import "@/styles/globals.css";

type Message = {
  to: string;
  amount: string;
};

export const addressAtom = atom("");
export const messageAtom = atom<Message>({
  to: "",
  amount: "",
});

function MyApp({Component, pageProps}: AppProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
