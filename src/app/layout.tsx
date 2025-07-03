import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kjelde CV's",
  description: "Victor and Bo Kjelde's professional resumes and portfolios",
  keywords: "Victor Kjelde, Bo Kjelde, Software Engineer, Computer Science, Resume, CV, Portfolio",
  authors: [{ name: "Victor Kjelde" }],
  openGraph: {
    title: "Kjelde's Resume",
    type: "profile",
    url: "",
    images: "",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
