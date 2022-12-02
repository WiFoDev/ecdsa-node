import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="portals" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
