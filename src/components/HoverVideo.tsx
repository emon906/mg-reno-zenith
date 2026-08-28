import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/** Small looping project clip: lazy-mounts near viewport, plays muted on loop. */
export function HoverVideo({
  src,
  poster,
  title,
  meta,
  className = "",
}: {
  src: string;
  poster: string;
  title: string;
  meta: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }),
      { rootMargin: "250px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`group relative overflow-hidden bg-card ${className}`}>
      <img
        src={poster}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105"
      />
      {active && (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-105"
        />
      )}
      <div className="veil pointer-events-none absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <p className="eyebrow">{meta}</p>
          <h3 className="mt-1 text-xl">{title}</h3>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-copper/50 text-copper">
          <Play className="size-3.5" />
        </span>
      </div>
    </div>
  );
}
