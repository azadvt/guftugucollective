import { Libre_Baskerville, Work_Sans } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "Guftugu Collective — A Film Society",
  description: "Guftugu Collective is a film society based in Kozhikode, Kerala, built around socially and politically grounded art. Screenings, festivals, and conversations beyond commerce.",
  keywords: ["Guftugu Collective", "film society", "Kozhikode", "Kerala", "independent cinema", "film festival", "art collective", "Odessa Collective", "political cinema"],
  authors: [{ name: "Guftugu Collective" }],
  metadataBase: new URL("https://guftugucollective.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Guftugu Collective — A Film Society",
    description: "A film society in Kozhikode, Kerala, built around socially and politically grounded art. Art as Expression, Resistance, and Collective Imagination.",
    url: "https://guftugucollective.com",
    siteName: "Guftugu Collective",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guftugu Collective — A Film Society",
    description: "A film society in Kozhikode, Kerala, built around socially and politically grounded art.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${workSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&family=Noto+Sans+Devanagari&family=Noto+Sans+Kannada&family=Noto+Sans+Malayalam&family=Noto+Sans+Tamil&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
