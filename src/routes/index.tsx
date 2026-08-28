import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Mail, MapPin, Star, Quote } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { BeforeAfter } from "@/components/BeforeAfter";
import { HoverVideo } from "@/components/HoverVideo";

import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import serviceRepairs from "@/assets/service-repairs.jpg";
import serviceRemodeling from "@/assets/service-remodeling.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

import heroVideo from "@/assets/hero-video.mp4.asset.json";
import showcaseVideo from "@/assets/showcase-video.mp4.asset.json";
import craftVideo from "@/assets/craft-video.mp4.asset.json";
import clipExterior from "@/assets/clip-exterior.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MG Contractor Projects | Premium Renovation & Remodeling, Lewisville TX" },
      {
        name: "description",
        content:
          "Texas renovation and remodeling contractor. Home repairs, remodeling, full renovations and interior & exterior improvements in Lewisville, TX.",
      },
      { property: "og:title", content: "MG Contractor Projects — Renovation & Remodeling" },
      {
        property: "og:description",
        content: "From small fixes to full renovations — we've got you covered. Lewisville, TX.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    title: "Home Repairs",
    copy: "Fast, meticulous fixes — drywall, trim, doors, flooring and everything the last contractor left behind.",
    img: serviceRepairs,
  },
  {
    n: "02",
    title: "Remodeling",
    copy: "Kitchens and baths rebuilt around how you actually live, with materials that hold up for decades.",
    img: serviceRemodeling,
  },
  {
    n: "03",
    title: "Renovations",
    copy: "Whole-home transformations managed end to end — demo, structure, finishes, final walkthrough.",
    img: serviceRenovation,
  },
  {
    n: "04",
    title: "Interior & Exterior",
    copy: "Facades, patios, paint, lighting and outdoor living spaces that lift the entire property.",
    img: serviceExterior,
  },
];

const reasons = [
  {
    t: "Owner on every job",
    d: "You deal directly with the person accountable for the work — not a rotating crew of subs.",
  },
  {
    t: "Fixed, honest pricing",
    d: "Detailed written scope before we start. No surprise line items halfway through.",
  },
  { t: "Licensed & insured", d: "Fully covered work across the Dallas–Fort Worth metroplex." },
  { t: "Clean job sites", d: "Protected floors, contained dust, and a swept space at the end of each day." },
  { t: "On-schedule delivery", d: "Realistic timelines, weekly updates, and dates we actually hit." },
  { t: "Craft-first finishes", d: "Tight miters, level tile, straight lines. The details you notice for years." },
];

const testimonials = [
  {
    q: "They rebuilt our kitchen and master bath in six weeks. The finish quality is better than the builder-grade work in the rest of the house.",
    n: "Dana R.",
    l: "Lewisville, TX",
  },
  {
    q: "Called about a small drywall repair and ended up hiring them for the whole first floor. Honest, punctual, and genuinely skilled.",
    n: "Marcus T.",
    l: "Flower Mound, TX",
  },
  {
    q: "The patio and exterior lighting completely changed how we use the house. Priced fairly and finished ahead of schedule.",
    n: "Priya S.",
    l: "Carrollton, TX",
  },
];

function Home() {
  return (
    <div id="top" className="bg-background">
      <Navbar />

      <main>
        {/* 2 — Cinematic hero */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <BackgroundVideo src={heroVideo.url} poster={hero} eager />
          <div className="veil pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-charcoal-deep/35" />

          <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-32 pb-16 lg:px-12 lg:pb-24">
            <Reveal>
              <p className="eyebrow">Lewisville, Texas · Est. Craftsmanship</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
                From small fixes to
                <span className="text-gradient-copper italic"> full renovations</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                MG Contractor Projects builds, repairs and reimagines Texas homes with the precision
                of a design studio and the discipline of a general contractor.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-copper px-8 py-4 font-mono text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase transition-all duration-500 hover:shadow-[var(--shadow-copper)]"
                >
                  Start your project
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:border-copper hover:text-copper"
                >
                  View our work
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["15+", "Years on the tools"],
                  ["400+", "Projects delivered"],
                  ["100%", "Licensed & insured"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-3xl text-copper sm:text-4xl">{k}</dt>
                    <dd className="mt-2 font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 3 — Services */}
        <section id="services" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <div>
                <p className="eyebrow">What we do</p>
                <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.03] tracking-[-0.02em]">
                  Four disciplines, one standard of finish
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Whether it's a single door that won't close or a house stripped back to the studs,
                the same crew and the same standard show up.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="hover-lift group relative aspect-[4/5] overflow-hidden bg-card">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="veil absolute inset-0" />
                  <div className="relative flex h-full flex-col justify-end p-7">
                    <span className="font-mono text-[0.65rem] tracking-[0.25em] text-copper">
                      {s.n}
                    </span>
                    <h3 className="mt-3 text-2xl leading-tight">{s.title}</h3>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-700 ease-[var(--ease-lux)] group-hover:max-h-40 group-hover:opacity-100">
                      {s.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4 — Full-width renovation video showcase */}
        <section className="relative">
          <div className="relative aspect-[21/9] min-h-[340px] w-full overflow-hidden">
            <BackgroundVideo src={showcaseVideo.url} poster={after2} />
            <div className="pointer-events-none absolute inset-0 bg-charcoal-deep/45" />
            <div className="veil pointer-events-none absolute inset-0" />
            <div className="relative flex h-full items-end">
              <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 lg:px-12 lg:pb-16">
                <Reveal>
                  <p className="eyebrow">In motion</p>
                  <h2 className="mt-4 max-w-2xl text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.05]">
                    Every surface considered, every line intentional.
                  </h2>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 5 — From Fixes to Full Renovations */}
        <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div className="relative">
                <img
                  src={story}
                  alt="Craftsman installing custom cabinetry"
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="w-full object-cover"
                />
                <div className="glass-panel absolute -right-4 -bottom-6 hidden max-w-[240px] p-6 sm:block lg:-right-10">
                  <p className="font-display text-3xl text-copper">1 crew</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Start to finish. No handoffs, no finger-pointing, no mystery subcontractors.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <p className="eyebrow">Our approach</p>
                <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.02em]">
                  From fixes to full renovations
                </h2>
                <p className="mt-7 leading-relaxed text-muted-foreground">
                  Most contractors want either the tiny jobs or the huge ones. We built MG around
                  doing both properly — the leaking trim piece and the two-story addition get the
                  same walkthrough, the same written scope, and the same finish standard.
                </p>
                <ul className="mt-10 divide-y divide-border border-y border-border">
                  {[
                    ["Walkthrough & scope", "On-site assessment and a line-item written estimate."],
                    ["Design & selections", "Materials, layouts and finishes chosen with you."],
                    ["Build", "Protected site, weekly updates, clean daily handover."],
                    ["Final walk", "Punch list closed before we ask for the last payment."],
                  ].map(([t, d], i) => (
                    <li key={t} className="group flex gap-6 py-5">
                      <span className="font-mono text-[0.65rem] text-copper">
                        0{i + 1}
                      </span>
                      <div>
                        <p className="text-base transition-colors duration-500 group-hover:text-copper">
                          {t}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6 — Before / After */}
        <section id="gallery" className="border-y border-border bg-charcoal/40">
          <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow">Transformations</p>
              <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.02em]">
                Drag to see the difference
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <Reveal>
                <BeforeAfter before={before1} after={after1} label="Guest bath · Lewisville" />
              </Reveal>
              <Reveal delay={140}>
                <BeforeAfter before={before2} after={after2} label="Kitchen remodel · Flower Mound" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 7 — Project showcase */}
        <section id="work" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.02em]">
                  Recent projects
                </h2>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.2em] text-copper uppercase"
              >
                Request the full portfolio
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0}>
              <HoverVideo
                src={clipExterior.url}
                poster={serviceExterior}
                title="Full exterior refresh"
                meta="Exterior · Carrollton"
                className="aspect-[16/11] h-full"
              />
            </Reveal>

            <Reveal className="lg:col-span-5" delay={100}>
              <figure className="group relative aspect-[16/11] h-full overflow-hidden bg-card">
                <img
                  src={project3}
                  alt="Master bedroom renovation with wood slat wall"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105"
                />
                <div className="veil absolute inset-0" />
                <figcaption className="absolute bottom-0 p-6">
                  <p className="eyebrow">Interior · Denton</p>
                  <h3 className="mt-1 text-xl">Primary suite rebuild</h3>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={160}>
              <figure className="group relative aspect-[4/5] h-full overflow-hidden bg-card">
                <img
                  src={project1}
                  alt="Staircase and entryway renovation"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105"
                />
                <div className="veil absolute inset-0" />
                <figcaption className="absolute bottom-0 p-6">
                  <p className="eyebrow">Millwork · Lewisville</p>
                  <h3 className="mt-1 text-xl">Entry & stair restoration</h3>
                </figcaption>
              </figure>
            </Reveal>

            <div className="grid gap-6 lg:col-span-7">
              <Reveal delay={220}>
                <HoverVideo
                  src={craftVideo.url}
                  poster={story}
                  title="Custom cabinetry & finish carpentry"
                  meta="Craft · In studio"
                  className="aspect-[16/9]"
                />
              </Reveal>
              <Reveal delay={280}>
                <figure className="group relative aspect-[16/9] overflow-hidden bg-card">
                  <img
                    src={project2}
                    alt="Outdoor living patio renovation"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105"
                  />
                  <div className="veil absolute inset-0" />
                  <figcaption className="absolute bottom-0 p-6">
                    <p className="eyebrow">Outdoor · Frisco</p>
                    <h3 className="mt-1 text-xl">Covered patio & fireplace</h3>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 8 — Full-screen video with overlay message */}
        <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden">
          <BackgroundVideo src={craftVideo.url} poster={serviceRenovation} />
          <div className="pointer-events-none absolute inset-0 bg-charcoal-deep/70" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="eyebrow">The MG standard</p>
              <h2 className="mt-7 text-[clamp(2rem,5vw,4.25rem)] leading-[1.03] tracking-[-0.02em]">
                We don't hand over a job we
                <span className="text-gradient-copper italic"> wouldn't live in</span>.
              </h2>
              <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
                Every project ends with a walkthrough where you point and we fix — before the final
                invoice, not after.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 9 — Why choose */}
        <section id="why" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <Reveal>
            <p className="eyebrow">Why MG</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.02em]">
              Why homeowners choose MG Contractor Projects
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 70}>
                <div className="group h-full bg-background p-9 transition-colors duration-700 hover:bg-charcoal">
                  <span className="rule-line block w-12 transition-all duration-700 group-hover:w-24" />
                  <h3 className="mt-7 text-xl">{r.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 10 — Testimonials */}
        <section className="border-y border-border bg-charcoal/40">
          <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-36">
            <Reveal>
              <p className="eyebrow">Testimonials</p>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.02em]">
                Word travels in Texas
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.n} delay={i * 110}>
                  <figure className="hover-lift flex h-full flex-col justify-between border border-border bg-background p-9">
                    <div>
                      <Quote className="size-6 text-copper" />
                      <blockquote className="mt-6 leading-relaxed text-foreground/90">
                        "{t.q}"
                      </blockquote>
                    </div>
                    <figcaption className="mt-9 border-t border-border pt-6">
                      <div className="flex gap-1 text-copper">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="size-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-3 text-sm">{t.n}</p>
                      <p className="font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                        {t.l}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 11 — CTA */}
        <section id="contact" className="relative overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
              <Reveal>
                <div>
                  <p className="eyebrow">Start your project</p>
                  <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.0] tracking-[-0.02em]">
                    Tell us what needs
                    <span className="text-gradient-copper italic"> building</span>.
                  </h2>
                  <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
                    Free on-site consultation across Lewisville and the DFW metroplex. Send a few
                    photos and we'll come back with a realistic scope and price.
                  </p>
                  <div className="mt-12 flex flex-wrap gap-4">
                    <a
                      href="tel:+12108381594"
                      className="group inline-flex items-center gap-3 bg-copper px-8 py-4 font-mono text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase transition-all duration-500 hover:shadow-[var(--shadow-copper)]"
                    >
                      <Phone className="size-4" />
                      Call +1 210-838-1594
                    </a>
                    <a
                      href="mailto:menojgarcia32@gmail.com"
                      className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:border-copper hover:text-copper"
                    >
                      <Mail className="size-4" />
                      Email us
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="glass-panel relative overflow-hidden p-9 lg:p-12">
                  <p className="eyebrow">Service area</p>
                  <ul className="mt-8 space-y-5">
                    {[
                      { icon: MapPin, k: "Based in", v: "Lewisville, TX 75067" },
                      { icon: Phone, k: "Phone", v: "+1 210-838-1594", href: "tel:+12108381594" },
                      {
                        icon: Mail,
                        k: "Email",
                        v: "menojgarcia32@gmail.com",
                        href: "mailto:menojgarcia32@gmail.com",
                      },
                    ].map(({ icon: Icon, k, v, href }) => (
                      <li key={k} className="flex items-start gap-4 border-b border-border pb-5">
                        <Icon className="mt-1 size-4 shrink-0 text-copper" />
                        <div>
                          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                            {k}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="text-lg transition-colors duration-500 hover:text-copper"
                            >
                              {v}
                            </a>
                          ) : (
                            <p className="text-lg">{v}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                    Serving Lewisville, Flower Mound, Carrollton, Denton, Frisco and the wider
                    Dallas–Fort Worth area.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* 12 — Footer */}
      <footer className="border-t border-border bg-charcoal-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl">MG Contractor Projects</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                From small fixes to full renovations — we've got you covered.
              </p>
            </div>
            <div>
              <p className="eyebrow">Services</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {services.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="transition-colors hover:text-copper">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Contact</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>Lewisville, TX 75067</li>
                <li>
                  <a href="tel:+12108381594" className="transition-colors hover:text-copper">
                    +1 210-838-1594
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:menojgarcia32@gmail.com"
                    className="transition-colors hover:text-copper"
                  >
                    menojgarcia32@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border pt-8 font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase sm:flex-row">
            <p>© {new Date().getFullYear()} MG Contractor Projects</p>
            <p>Licensed & insured · Texas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
