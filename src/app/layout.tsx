import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  // Absolute base for canonical and og URLs emitted by Next.
  metadataBase: new URL("https://denvercontactimprov.com"),
  title: {
    default: "Art of Living CI — Contact Improvisation Series with Michael Bernal in Denver, CO",
    template: "%s :: Art of Living CI",
  },
  description:
    "Art of Living CI is Michael Bernal's multi-week Contact Improvisation (contact improv dance) series in Denver, Colorado: beginner-friendly classes and immersive gatherings rooted in presence, belonging, and play.",
  keywords: [
    "contact improvisation",
    "contact improv",
    "CI",
    "Denver contact improv",
    "Denver contact improvisation",
    "contact improv Denver",
    "contact improvisation Denver",
    "contact improv classes Denver",
    "contact improv jam Denver",
    "dance classes Denver",
    "movement classes Denver",
    "embodiment practice Denver",
    "community dance Denver",
    "beginner contact improv",
    "Michael Bernal",
    "Art of Living series",
    "Denver dance community",
    "somatic movement Denver",
    "improvisation dance Denver",
    "weight sharing dance",
    "contact dance Denver Colorado",
  ],
  openGraph: {
    images: [{ url: "/images/mentorship.jpg", width: 1200, height: 630, alt: "Contact Improvisation in Denver, Colorado" }],
    title: "Art of Living CI — Contact Improvisation Series in Denver",
    description:
      "Michael Bernal's multi-week Contact Improvisation series in Denver, CO. Beginner-friendly, rooted in presence, belonging, and play.",
    url: "https://denvercontactimprov.com",
    siteName: "Art of Living CI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/mentorship.jpg"],
    title: "Art of Living CI — Contact Improvisation Series in Denver",
    description:
      "Michael Bernal's multi-week Contact Improvisation series in Denver, CO. Beginner-friendly and rooted in belonging.",
  },
  alternates: {
    canonical: "https://denvercontactimprov.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Denver Contact Improv",
              description:
                "Beginner-friendly Contact Improvisation classes, jams, workshops, and community events in Denver, Colorado.",
              url: "https://denvercontactimprov.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denver",
                addressRegion: "CO",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.instagram.com/artoflivingci",
              ],
              areaServed: {
                "@type": "City",
                name: "Denver",
              },
              keywords:
                "contact improvisation, contact improv, dance classes, jams, workshops, Denver, Colorado",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Denver Contact Improv",
              url: "https://denvercontactimprov.com",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
