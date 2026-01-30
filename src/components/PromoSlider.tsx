import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface Promo {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  image: string;
}

const promos: Promo[] = [
  {
    id: 1,
    category: "Movie Talkz",
    title: "Michael",
    subtitle: "Fassbender",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop", // Cinematic dark placeholder
  },
  {
    id: 2,
    category: "Festival 2024",
    title: "Luanda",
    subtitle: "Short Film Festival",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop", // Cinema theater
  },
  {
    id: 3,
    category: "Director's Cut",
    title: "Behind",
    subtitle: "The Scenes",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop", // Film camera
  },
];

export const PromoSlider = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Socials rail */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex w-12 flex-col items-center justify-center gap-5 bg-black/70 backdrop-blur-sm border-r border-white/10">
        <div className="flex flex-col items-center gap-3 text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
            instagram
          </span>
          <Instagram className="h-5 w-5" />
        </div>
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="flex flex-col items-center gap-3 text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
            facebook
          </span>
          <Facebook className="h-5 w-5" />
        </div>
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {promos.map((promo) => (
            <CarouselItem key={promo.id} className="relative w-full h-full pl-0">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={promo.image}
                  alt={`${promo.title} ${promo.subtitle}`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-16 md:px-28 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-6 animate-fade-up">
                  <span className="text-primary font-bold">0{promo.id}</span>
                  <span className="w-12 h-[1px] bg-primary"></span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-300">
                    {promo.category}
                  </span>
                </div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-2 leading-[0.9] animate-fade-up-delay-1">
                  <span className="block">{promo.title}</span>
                  <span className="block text-white">{promo.subtitle}</span>
                </h1>

                <Button
                  variant="link"
                  className="w-fit p-0 mt-8 text-primary hover:text-white text-sm font-bold tracking-widest uppercase group animate-fade-up-delay-2"
                >
                  Watch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation - Bottom Right */}
        <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <CarouselPrevious className="static translate-y-0 translate-x-0 rounded-none border-white/20 bg-black/50 hover:bg-primary hover:text-black hover:border-primary text-white" />
            <CarouselNext className="static translate-y-0 translate-x-0 rounded-none border-white/20 bg-black/50 hover:bg-primary hover:text-black hover:border-primary text-white" />
        </div>
      </Carousel>
    </section>
  );
};


