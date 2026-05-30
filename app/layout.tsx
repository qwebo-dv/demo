import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://archterra.ru"),
  title: "ArchTerra — архитектура в природном материале",
  description:
    "Натуральный камень, художественная роспись, ландшафт и архитектурное освещение для частных резиденций и общественных пространств.",
  keywords: [
    "ArchTerra",
    "натуральный камень",
    "художественная роспись",
    "ландшафтный дизайн",
    "архитектурное освещение",
  ],
  openGraph: {
    title: "ArchTerra — архитектура в природном материале",
    description:
      "Команда мастеров для фасадов, интерьеров, садов и световых сценариев.",
    url: "https://archterra.ru",
    siteName: "ArchTerra",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
