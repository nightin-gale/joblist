import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
        <VercelAnalytics />
        <GoogleAnalytics token={`${process.env.GOOGLE_ANALYTICS_TOKEN}`} />
      </body>
    </html>
  );
}
