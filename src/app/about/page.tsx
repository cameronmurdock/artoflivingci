import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About Michael Bernal :: Art of Living CI",
  description:
    "Learn about Michael Bernal, the story behind Art of Living CI, and the practice that shapes the series and mentorship.",
};

const storyParagraphs = [
  "What began as a personal search for something real became a practice of creating spaces where people can return to themselves, meet one another honestly, and discover belonging through movement.",
  "Founded by Michael Bernal, carrying a quiet but familiar feeling, the sense of not quite belonging, of searching for something real. He started with a simple intention: to create a space where people could return to themselves, where connection wasn't forced, but discovered. In the beginning, it was just one or two people showing up, stepping into the unknown together, listening, moving, learning how to be.",
  "Through contact improvisation, that small circle began to open, rooted in nervous system awareness, relational intelligence, felt physics, and deep somatic listening. Week by week, bodies gathered, trust grew, and something organic began to take shape. What started as a quiet offering slowly became a home, a community that now holds hundreds of people, each bringing their own story, their own curiosity, their own longing to belong.",
  "Because this is what we are really practicing: remembering how to listen. Remembering how to trust. Remembering that belonging is not something we earn, but something we allow.",
];

const michaelParagraphs = [
  "Michael Bernal is a movement teacher and space holder devoted to the subtle art of living. His path is shaped by curiosity, lived experience, and a deep trust in the body's innate intelligence.",
  "His work and interests has taken him across cultures and communities around the world, where he has spent over a decade supporting individuals and groups in reconnecting with their capacity for presence, creativity, and embodied truth.",
  "At the heart of his approach is a simple but powerful orientation: that within each person lives an infinite capacity for love, joy, equanimity, and compassion, waiting to be lived within the finite reality of being human.",
  "A profound heartbreak marked a turning point in his life, initiating a deeply personal journey of transformation. What began as loss became a gateway into a more intimate relationship with himself and a lasting devotion to walking alongside others as they navigate their own thresholds of change.",
  "This experience continues to inform his work, grounding it in humility, compassion, and an unwavering belief in the possibility of feeling true belonging and empowerment.",
  "Michael's teaching lives at the intersection of Contact Improvisation, somatics, and meditation, informed by years of dedicated practice in movement, embodiment, and deep listening.",
  "He also draws from Buddhist studies, IFS, and polyvagal theory as pathways into greater awareness and relational sensitivity.",
  "Known for his intuitive and grounded facilitation, he creates spaces where people are invited to slow down, listen inward, and meet themselves honestly.",
  "His approach does not seek to remove the challenges of life, but to move and be with them. Exploring discomfort, connection, and the intelligence of the nervous system as part of a life fully lived.",
  "He remains, above all, a student, continually listening for what the body remembers, and what it may be ready to discover next.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-warm">
                About Michael
              </p>
              <h1
                className="text-4xl font-bold text-foreground md:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The story behind the Art of Living.
              </h1>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                {storyParagraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 3 ? "text-xl font-light text-foreground" : undefined
                    }
                    style={
                      index === 3
                        ? { fontFamily: "var(--font-playfair)" }
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
              <Image
                src={imagePath("/images/about-1.jpg")}
                alt="Michael Bernal and community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] order-2 lg:order-1">
              <Image
                src={imagePath("/images/about-2.jpg")}
                alt="Michael Bernal teaching contact improvisation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-warm">
                Michael Bernal
              </p>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                {michaelParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/events/art-of-living-round-12"
                  className="rounded-full bg-warm px-8 py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
                >
                  Join the Series
                </Link>
                <Link
                  href="/mentor"
                  className="rounded-full border border-warm/50 px-8 py-3.5 font-medium text-warm transition-all hover:bg-warm hover:text-background"
                >
                  Explore Mentorship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
