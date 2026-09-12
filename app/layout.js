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
  description: "A community-driven film society dedicated to celebrating the art of cinema through screenings, workshops, and meaningful conversations.",
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
