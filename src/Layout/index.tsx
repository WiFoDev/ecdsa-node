import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import alchemyLogo from "@/assets/alchemy-logo.png";

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
        <nav className="flex h-16 mx-auto max-w-screen-standar items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          <Link href="/">
            <div className="mr-auto text-xl cursor-pointer">
              My ECDSA Node
            </div>
          </Link>
          <Link href="/generate">
            <div className="bg-primary px-4 py-2 rounded cursor-pointer">
              Generate Wallet
            </div>
          </Link>
        </nav>
      </header>
      <main className="relative flex-1 flex flex-col items-center gap-4 mx-auto max-w-screen-standar pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div className="w-16 h-16 rounded overflow-hidden">
          <Image
            alt="Alchemy Platform Logo"
            layout="responsive"
            src={alchemyLogo}
          />
        </div>
        {children}
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-screen-standar py-5 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Made with ❤️ by WiFo
        </div>
      </footer>
    </div>
  );
};
