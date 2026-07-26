import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import AppShell from "@/components/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DAMAC HILLS — Building Excellence. Creating the Future.",
  description:
    "DAMAC HILLS is a leading construction and engineering company headquartered in Riyadh, Kingdom of Saudi Arabia, delivering integrated construction solutions across residential, commercial, industrial, and infrastructure sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">
        <Cursor />
        <SmoothScroll>
          <AppShell>{children}</AppShell>
        </SmoothScroll>
      </body>
    </html>
  );
}
