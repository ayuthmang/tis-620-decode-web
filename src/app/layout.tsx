import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "TIS-620 Decode — Web",
  description:
    "Simple web tool to decode and convert TIS-620 (Thai) encoded text to UTF-8, with copy/paste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sarabun.className} suppressHydrationWarning>
        <Providers>
          <div className="flex h-full flex-col">
            <Header />
            <div className="flex-shrink-0 flex-grow-[3] basis-0">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
