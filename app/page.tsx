import { Metadata } from "next";
import HomeContainer from "@/components/Home";

export const metadata: Metadata = {
  title: "Download High-Quality FLAC Songs | Free Lossless Audio",
  description:
    "Download high-quality FLAC format songs for free. Get the best lossless audio in FLAC format from a wide selection of music genres. Enjoy the best sound quality available online.",
  keywords:
    "FLAC download, free music, lossless audio, high-quality songs, FLAC format, music download",
  openGraph: {
    title: "Download High-Quality FLAC Songs | Free Lossless Audio", // Open Graph title
    description:
      "Explore a collection of high-quality FLAC songs available for free download. Perfect for audiophiles and music lovers who want lossless audio.",
    url: "https://www.yourwebsite.com", // Canonical URL for the homepage
    images: ["https://www.yourwebsite.com/images/flac-download-preview.jpg"], // Corrected to 'images' (plural)
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    title: "Download High-Quality FLAC Songs | Free Lossless Audio",
    description:
      "Get free FLAC downloads of your favorite songs in the best quality available. Experience the purest audio with lossless FLAC format.",
      images: ["https://www.yourwebsite.com/images/flac-download-preview.jpg"], // Twitter card image
  },
  robots: {
    index: true, // Allows search engines to index the page
    follow: true, // Allows search engines to follow links on the page
  }
};

export default function Home() {
  return <HomeContainer />;
}

