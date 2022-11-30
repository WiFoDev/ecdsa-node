import Head from "next/head";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>ECDSA Node</title>
        <meta
          content="The next generation ECDSA Node"
          name="My ECDSA Node"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header className="sticky top-0 z-20 w-full">
        <nav className="flex pointer-events-none h-16 mx-auto max-w-screen-standar items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          <div className="mr-auto text-xl">My ECDSA Node</div>
        </nav>
      </header>
      <main className="relative flex-1 mx-auto max-w-screen-standar pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        {children}
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-screen-standar py-12 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Here is the footer section
        </div>
      </footer>
    </div>
  );
};
