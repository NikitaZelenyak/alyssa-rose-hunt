import type { Metadata } from "next";

import "./styles/globals.css";
import "./assets/main.scss";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Alyssa Rose Hunt",
  description: "Alyssa Rose Hunt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>Alyssa Rose Hunt</title>
          <link rel="icon" href="./favicon.ico" type="image/ico" />
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <body>{children}</body>
      </html>
    </>
  );
}
