import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Josias.dev | Développeur Web Full-Stack",
  description: "Portfolio de Josias Boco, un développeur web full-stack spécialisé en React, Next.js et technologies web modernes.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth dark" lang="fr">
      <body
        className={`${outfit.variable} ${ovo.variable} font-outfit antialiased leading-8 overflow-x-hidden`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}