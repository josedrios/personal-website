import type { Metadata } from "next";
import "@/styles/main.css";
import { JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jetbrains = JetBrains_Mono({});

export const viewport = {
  themeColor: "#191a1c",
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
    <html lang="en" className={jetbrains.className}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
