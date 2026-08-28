import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  eager?: boolean;
};

/** Autoplaying, muted, looping background video that only loads once near the viewport. */
export function BackgroundVideo({ src, poster, className = "", eager = false }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {active && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? "auto" : "none"}
          disablePictureInPicture
        />
      )}
    </div>
  );
}
