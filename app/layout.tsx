import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://azabu-iroha.vercel.app";
const siteName = "牡蠣と肉 あざぶいろは｜麻布十番 和牛すき焼き・しゃぶしゃぶ";
const description =
  "麻布十番・元麻布の牡蠣と肉 あざぶいろは。米沢牛のすき焼き、しゃぶしゃぶ、牡蠣、海鮮を楽しめる完全予約制の店舗情報ページです。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName}【公式情報まとめ】`,
    template: `%s | ${siteName}`
  },
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteName}【公式情報まとめ】`,
    description,
    url: siteUrl,
    siteName,
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName}【公式情報まとめ】`,
    description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
