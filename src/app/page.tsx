import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/testimonials";
import { imagePath } from "@/lib/paths";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imagePath("/images/hero-main.jpg")}
            alt="Art of Living CI community dancing"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(234,223,205,0.78)_0%,rgba(234,223,205,0.64)_24%,rgba(33,26,22,0.34)_54%,rgba(234,223,205,0.93)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,239,0.24),transparent_40%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 text-center">
          <div className="rounded-[2rem] border border-background/45 bg-background/28 px-5 py-8 shadow-[0_24px_80px_rgba(36,26,18,0.18)] backdrop-blur-[10px] md:px-10 md:py-10">
            <div className="mb-6 animate-fade-in">
              <Link
                href="/events/art-of-living-round-12"
                className="inline-flex max-w-full items-center justify-center rounded-full border border-warm-dark/50 bg-warm-dark px-6 py-3 text-sm font-semibold text-background shadow-[0_16px_40px_rgba(58,37,24,0.28)] transition-all hover:-translate-y-0.5 hover:bg-warm sm:px-8"
              >
                Join us for our next series: Art of Living Round 12
              </Link>
            </div>

            <h1
              className="mb-2 animate-fade-up text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
              style={{
                fontFamily: "var(--font-playfair)",
                textShadow: "0 10px 28px rgba(255, 248, 239, 0.18)",
              }}
            >
              <span className="text-foreground">THE ART</span>
            </h1>
            <h2
              className="mb-3 animate-fade-up text-5xl font-light text-warm md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-playfair)",
                animationDelay: "0.1s",
                textShadow: "0 10px 24px rgba(255, 248, 239, 0.14)",
              }}
            >
              of Living
            </h2>
            <p
              className="animate-fade-up text-sm uppercase tracking-[0.35em] text-foreground/70 md:text-base"
              style={{ animationDelay: "0.15s" }}
            >
              Contact Improvisation with Michael Bernal
            </p>
            <p
              className="mx-auto mt-6 max-w-2xl animate-fade-up text-xl leading-relaxed text-foreground/88 md:text-2xl"
              style={{ animationDelay: "0.2s" }}
            >
              A movement practice for trust, embodied listening, and a more
              intimate relationship with being alive.
            </p>

            <div
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/events/art-of-living-round-12"
                className="rounded-full bg-warm px-8 py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
              >
                Join Round 12
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-border/50 px-8 py-3.5 font-medium text-foreground transition-colors hover:border-warm/50 hover:text-warm"
              >
                Meet Michael
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Through contact improvisation, somatic listening, and relational
            practice, The Art of Living invites people into a deeper experience
            of trust, connection, and nervous-system awareness.
          </p>
        </div>
      </section>

      <section className="bg-card/30 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={imagePath("/images/about-2.jpg")}
              alt="Michael Bernal and Art of Living community"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-warm">
              Michael Bernal
            </p>
            <h2
              className="text-3xl font-bold text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Story, teaching, and the practice behind the series.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Michael Bernal is a movement teacher and space holder devoted to
                the subtle art of living. His work lives at the intersection of
                contact improvisation, somatics, meditation, and relational
                intelligence.
              </p>
              <p>
                What began as a personal search for something real became a
                practice of building spaces where people can return to
                themselves, meet one another honestly, and discover belonging
                through movement.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-warm/50 px-8 py-3.5 font-medium text-warm transition-all hover:bg-warm hover:text-background"
            >
              Read Michael&apos;s Story
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-warm">
                Featured Series
              </p>
              <h2
                className="mb-6 text-3xl font-bold text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Art of Living Round 12
              </h2>
              <h3 className="mb-4 text-lg text-muted-foreground">
                4-week CI series with Michael Bernal
              </h3>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Come as you are and enter a space where movement becomes a
                doorway into trust, connection, and belonging. Through contact
                improvisation, we&apos;ll learn to listen softly and honestly to
                our bodies, our nervous systems, and each other, rooted in care
                and consent.
              </p>
              <Link
                href="/events/art-of-living-round-12"
                className="inline-flex items-center gap-2 rounded-full bg-warm px-8 py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
              >
                Reserve Your Spot
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8H13M9 4L13 8L9 12" />
                </svg>
              </Link>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={imagePath("/images/featured-jam.jpg")}
                alt="The Art of Living contact improvisation series"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-warm/60">
                1:1 Mentorship
              </p>
              <h2
                className="mb-3 text-3xl font-bold text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Embodied listening, direct guidance, and deeper practice.
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Mentorship with Michael Bernal
              </p>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  This mentorship is for movers, teachers, and curious humans
                  who want more personalized support than a group series can
                  offer. The focus is not only skill-building, but also how
                  your practice meets your real life.
                </p>
                <p>
                  Work one-on-one with Michael to refine your relationship to
                  contact improvisation, deepen somatic awareness, build
                  confidence, and receive tailored feedback that responds to
                  where you actually are.
                </p>
                <p>
                  If the series opens the door, mentorship offers a more
                  spacious container to integrate, question, experiment, and
                  grow with direct support.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/mentor"
                  className="inline-flex items-center gap-2 rounded-full bg-warm px-8 py-3.5 font-medium text-background transition-colors hover:bg-warm-light"
                >
                  View Mentorship Details
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-warm/50 px-8 py-3.5 font-medium text-warm transition-all hover:bg-warm hover:text-background"
                >
                  Ask About Mentorship
                </Link>
              </div>
            </div>

            <div className="order-1 relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
              <Image
                src={imagePath("/images/mentorship.jpg")}
                alt="Michael Bernal mentorship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-border/50 bg-background/70 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-warm">
                Also in Denver
              </p>
              <h2
                className="mt-3 text-2xl font-bold text-foreground md:text-3xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Monday Jam at Wiggle Room
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The weekly jam is still part of the wider ecosystem, but this
                site centers Michael&apos;s Art of Living series and mentorship.
                If you want to drop into the broader Denver community practice,
                the jam page is here.
              </p>
            </div>
            <Link
              href="/jam"
              className="inline-flex rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-warm/50 hover:text-warm"
            >
              Visit the Jam Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
