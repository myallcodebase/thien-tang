import { useState, useEffect, useCallback } from "react";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    alt: "MacBook with code on wooden desk",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80",
    alt: "Laptop displaying code",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
    alt: "Colorful code on screen",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80",
    alt: "Monitor with programming code",
  },
];

const INTERVAL_MS = 4000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [hovered, next]);

  return (
    <div
      className="relative w-full h-full overflow-hidden lg:rounded-r-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {IMAGES.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current
              ? hovered ? "scale(1.05)" : "scale(1)"
              : "scale(1)",
            transitionProperty: "opacity, transform",
          }}
        />
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              backgroundColor: i === current ? "#16a34a" : "rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
