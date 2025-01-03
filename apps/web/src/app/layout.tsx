import type {Metadata} from "next";
import "./globals.css";
import {clsx} from "clsx";
import {GeistSans} from 'geist/font/sans';
import {Toaster} from "sonner";
import {Header} from "@/components/header/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="h-full">
      <body className={clsx(GeistSans.className, "flex flex-col w-full h-full")}>
      <Header/>
      <main className="w-full h-full px-10 lg:px-20 xl:px-40 py-8">
        {children}
      </main>
      <Toaster/>
      </body>
      </html>
  );
}
