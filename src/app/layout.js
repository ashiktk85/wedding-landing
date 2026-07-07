import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import { ImageKitProvider } from "@imagekit/next";
import JsonLd from "@/components/JsonLd";
import { businessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import { defaultOpenGraph } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: {
    template: '%s | FocusMedia Productions',
    default: 'Best Wedding Photography & Videography in Kerala | FocusMedia',
  },
  description:
    'FocusMedia Productions is a Kochi-based wedding photography & cinematic videography studio covering candid, Christian, Hindu & Muslim weddings across Kerala and destination weddings worldwide.',
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  icons: {
    icon: siteConfig.logo.black,
    shortcut: siteConfig.logo.black,
    apple: siteConfig.logo.black,
  },
  openGraph: defaultOpenGraph(),
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <JsonLd data={businessSchema()} />
        <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}>
          {children}
        </ImageKitProvider>
      </body>
    </html>
  );
}
