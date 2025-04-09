"use client";

import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Sansita } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";


import "../styles/index.css";
import "../styles/global.css";
import "../styles/home.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. See https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <head />

      <body class={`mx-1 bg-white ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Analytics />
          <Footer />
          {/* <ScrollToTop /> */}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
