import { useEffect, useState } from "react";

interface ParallaxSlide {
  id: number;
  label: string;
  type: "image" | "video";
  src: string;
}

const parallaxSlides: ParallaxSlide[] = [
  {
    id: 1,
    label: "International Audience Award 25",
    type: "video",
    src: "https://www.youtube.com/embed/ngtQ56v2rJc?autoplay=1&mute=1&controls=0&loop=1&playlist=ngtQ56v2rJc&modestbranding=1&rel=0&playsinline=1",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const PromoSlider = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-hidden bg-black">
      {parallaxSlides.map((item, index) => {
        const rawOffset = (scrollY - index * 700) * 0.12;
        const translateY = clamp(rawOffset, -140, 140);

        return (
          <article
            key={item.id}
            className="relative h-screen min-h-screen w-screen overflow-hidden border-b border-white/10"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.label}
                className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
                style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
              />
            ) : (
              <div
                className="absolute inset-0 h-[120%] w-full overflow-hidden will-change-transform"
                style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
              >
                <iframe
                  src={item.src}
                  title={item.label}
                  className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
                  style={{ width: "100vw", height: "56.25vw", minWidth: "100%", minHeight: "100%" }}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/55" />

            <div className="relative z-10 flex h-full items-end px-6 pb-8 md:px-12 md:pb-12">
              <p className="text-sm font-semibold tracking-[0.25em] text-white/85">
                {item.label}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
