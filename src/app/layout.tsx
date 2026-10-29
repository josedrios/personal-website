import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/main.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Note from "@/components/Note";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-default",
  subsets: ["latin"]
});

export const viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Jose D. Rios",
    default: "Jose D. Rios",
  },
  description: "Jose D. Rios's Personal Website",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Jose D. Rios",
    url: "https://josedrios.com",
    type: "website",
    images: [
      {
        url: "https://josedrios.com/images/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "My Personal Website",
      },
    ],
    locale: "en_US",
  },
  manifest: "/favicons/site.webmanifest",
  themeColor: "#191a1c",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <html lang="en" className={`${jetbrains.variable} } ${inter.variable}`}>
        <body>
          <FadeIn>
            <Nav />
          </FadeIn>
          <FadeIn>
            <Note title="update">The website will be going through a major UI change for these next coming millennia. Sorry for any weird UI instances.</Note>
          </FadeIn>
          {children}
          <FadeIn>
            <Footer />
          </FadeIn>
        </body>
      </html>
    </>
  );
}
