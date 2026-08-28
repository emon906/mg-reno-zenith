import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Before / After", href: "#gallery" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-panel border-x-0 border-t-0 py-3" : "border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-foreground">MG</span>
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase transition-colors group-hover:text-copper">
            Contractor Projects
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-mono text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors duration-500 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-copper after:transition-all after:duration-500 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12108381594"
            className="hidden items-center gap-2 border border-copper/40 px-5 py-2.5 font-mono text-[0.68rem] tracking-[0.18em] text-copper uppercase transition-all duration-500 hover:bg-copper hover:text-primary-foreground sm:inline-flex"
          >
            <Phone className="size-3.5" />
            210-838-1594
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel mt-3 border-x-0 lg:hidden">
          <ul className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-mono text-xs tracking-[0.2em] uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
