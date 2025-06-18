import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Social Media Dashboard",
    default: "Social Media Dashboard",
  },
  description:
    "A social media dashboard to track and analyze your social media performance.",
};

export default function RootLayout({
  children,
  list,
  overview,
}: Readonly<{
  children: React.ReactNode;
  list: React.ReactNode;
  overview: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        <div className="max-w-[1440px] mx-auto w-full px-8 py-4 md:px-25 md:py-8 space-y-15">
          {children}
          {list}
          {overview}
        </div>
      </body>
    </html>
  );
}
