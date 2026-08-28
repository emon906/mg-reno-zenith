import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <figure className="group">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${label} after renovation`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img
            src={before}
            alt={`${label} before renovation`}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[35%]"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-copper"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-copper text-primary-foreground shadow-[var(--shadow-copper)]">
            <MoveHorizontal className="size-4" />
          </span>
        </div>

        <span className="pointer-events-none absolute bottom-4 left-4 bg-background/70 px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.22em] uppercase backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 bottom-4 bg-copper px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.22em] text-primary-foreground uppercase">
          After
        </span>
      </div>
      <figcaption className="mt-4 font-mono text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
        {label}
      </figcaption>
    </figure>
  );
}
