import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ContentItem {
  id: number;
  title: string;
  image: string;
}

const items: ContentItem[] = [
  { id: 1, title: "Short Film A", image: "https://images.unsplash.com/photo-1517604931442-71053e3e2e3c?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, title: "Short Film B", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, title: "Short Film C", image: "https://images.unsplash.com/photo-1542204165-65926c4556a3?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, title: "Short Film D", image: "https://images.unsplash.com/photo-1524712094619-328b3a97472d?q=80&w=2670&auto=format&fit=crop" },
  { id: 5, title: "Short Film E", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2670&auto=format&fit=crop" },
];

interface SectionSliderProps {
  title: string;
}

export const SectionSlider = ({ title }: SectionSliderProps) => {
  return (
    <section className="py-12 bg-black px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tighter border-l-4 border-primary pl-4">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <Card className="bg-transparent border-0 rounded-none overflow-hidden group cursor-pointer">
                  <CardContent className="p-0 relative aspect-[2/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="static translate-y-0 translate-x-0 bg-transparent border-white/20 text-white hover:bg-primary hover:text-black" />
            <CarouselNext className="static translate-y-0 translate-x-0 bg-transparent border-white/20 text-white hover:bg-primary hover:text-black" />
        </div>
      </Carousel>
    </section>
  );
};



