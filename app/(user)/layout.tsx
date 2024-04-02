import "@/styles/globals.css";
import { Metadata } from "next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <div className="w-full text-center font-bold py-3 text-xl">
          JOIN US! We are looking for collaborators.
          <a href="mailto:contact@joblist.org.uk" className="text-black font-bold">
            <span className="underline"> contact@joblist.org.uk</span>
          </a>
        </div>

        <main>
          <div className="min-h-[100svh] w-full">{children}</div>
        </main>
        <Footer />
      </div>
      <VercelAnalytics />
      <GoogleAnalytics token={`${process.env.GOOGLE_ANALYTICS_TOKEN}`} />
      <VercelSpeedInsights />
    </>
  );
}
