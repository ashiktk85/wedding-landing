import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import { ImageKitProvider } from "@imagekit/next";
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
    template: '%s | FocusMedia',
    default: 'Wedding Photography & Videography',
  },
  description: "FocusMedia Productions captures the most beautiful moments of your life with our cinematic wedding photography and videography services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}>
          {children}
        </ImageKitProvider>
      </body>
    </html>
  );
}
