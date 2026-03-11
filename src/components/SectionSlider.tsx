import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Instagram } from "lucide-react";
import upcoming1 from "../../WhatsApp Image 2026-03-10 at 17.53.36.jpeg";
import upcoming2 from "../../WhatsApp Image 2026-03-10 at 17.53.36 (5).jpeg";
import upcoming3 from "../../WhatsApp Image 2026-03-10 at 17.53.36 (4).jpeg";
import upcoming4 from "../../WhatsApp Image 2026-03-10 at 17.53.36 (3).jpeg";
import upcoming5 from "../../WhatsApp Image 2026-03-10 at 17.53.36 (2).jpeg";
import upcoming6 from "../../WhatsApp Image 2026-03-10 at 17.53.36 (1).jpeg";

type Language = "pt" | "en";

interface FilmDetails {
  title: string;
  creditLine: string;
  instagramLinks?: Array<{ label: string; url: string }>;
  subtitle?: string;
  portugueseText: string[];
  englishText: string[];
}

interface ContentItem {
  id: number;
  title: string;
  image: string;
  details?: FilmDetails;
}

const items: ContentItem[] = [
  {
    id: 1,
    title: "Uma Chance",
    image: upcoming1,
    details: {
      title: "Uma Chance",
      creditLine: "Dir. João Miranda, Prod. Slowmotion",
      instagramLinks: [
        { label: "@shortcutzluanda", url: "https://www.instagram.com/shortcutzluanda/" },
      ],
      subtitle: "Uma história sobre fragilidade, coragem e amor",
      portugueseText: [
        "Uma Chance é um retrato íntimo da fragilidade da vida, da coragem feminina e do renascimento através do amor.",
      ],
      englishText: [
        "One Chance, is an intimate portrait of life's fragility, female courage, and rebirth through love.",
      ],
    },
  },
  {
    id: 2,
    title: "50 Kwanzas",
    image: upcoming2,
    details: {
      title: "50 Kwanzas",
      creditLine: "Dir. E Produção Jesualdo Muvuma",
      instagramLinks: [
        { label: "@jesualdo_jm", url: "https://www.instagram.com/jesualdo_jm/" },
        { label: "@50kwanzas_film", url: "https://www.instagram.com/50kwanzas_film/" },
      ],
      subtitle: "Uma história de luta, resiliência e esperança.",
      portugueseText: [
        "Acompanha Tchicolassonhi, uma zungueira (em Angola, o termo para vendedoras ambulantes), na sua luta diária por melhores condições para si e para a sua família. É uma jornada quase interminável em busca dos 50 Kz, uma das moedas de menor valor e mais amplamente circuladas em Angola (cerca de 0,4 EUR), que pode significar pouco para muitos, mas que dá cor à vida de uma zungueira.",
        "Para além da subjectividade do valor, o filme aprofunda temas como o luto e a resiliência, e oferece uma crítica social à violência policial que as zungueiras enfrentam todos os dias.",
      ],
      englishText: [
        "Follows Tchicolassonhi, a Zungueira (in Angola, the term for female street vendors), in her daily struggle for better conditions for herself and her family. It is an almost endless journey in pursuit of the 50 Kz, one of the lowest-value and most widely circulated coins in Angola (around EUR 0.4), which may mean little to many, but bring color to the life of a Zungueira.",
        "Beyond the subjectivity of value, the film delves into themes of grief and resilience, and offers a social critique of the police violence that Zungueiras face every day.",
      ],
    },
  },
  {
    id: 3,
    title: "O Medo",
    image: upcoming3,
    details: {
      title: "O Medo",
      creditLine: "Real. e Prod. Vicente Tedica",
      portugueseText: [
        "Num bairro mergulhado na escuridão devido à falta de iluminação pública, o criminoso Pé de Cabra usa as sombras como escudo para aterrorizar os moradores.",
        "Depois de assassinar brutalmente um jovem motorista de mototáxi, a sua impunidade é ameaçada quando a testemunha Matula grava secretamente o crime em vídeo. Essa prova digital é a única luz capaz de perfurar o terror da noite e levar o criminoso à justiça.",
      ],
      englishText: [
        "In a neighborhood plunged into darkness due to a lack of public lighting, the criminal Pé de Cabra (The Crowbar) uses the shadows as a shield to terrorize residents.",
        "After he brutally murders a young motorcycle taxi driver, his impunity is threatened when the witness Matula secretly captures the crime on video. This digital evidence is the only light capable of piercing the night's terror and bringing the criminal to justice.",
      ],
    },
  },
  {
    id: 4,
    title: "Anestesiada",
    image: upcoming4,
    details: {
      title: "Anestesiada",
      creditLine: "Real. Norberto Ndonga e André Cupessala, Prod. António Matary",
      portugueseText: [
        "Angelina é uma pré-adolescente que, ainda nova, viu sua vida sendo invadida por problemas de diferentes escalas, um misto de desamparo emocional e constante desconstrução do seu futuro.",
      ],
      englishText: [
        "Angelina is a pre-teen who, while still young, has seen her life invaded by problems of varying degrees, a mixture of emotional neglect and the constant dismantling of her future.",
      ],
    },
  },
  {
    id: 5,
    title: "Kunanga aos 30",
    image: upcoming5,
    details: {
      title: "Kunanga aos 30",
      creditLine: "Real. Marcos Ndombel, Prod. Paula Campos.",
      portugueseText: [
        "NELSON está prestes a completar 30 anos de idade, sem emprego e planos de vida. Os pais saturados exigem que abandone a casa no prazo de 24h. Nelson, entre a cruz e a parede, decide participar num assalto que vai mudar a sua vida.",
      ],
      englishText: [
        "Nelson is about to turn 30, unemployed and with no plans for his life. His fed-up parents demand that he leave home within 24 hours. With his back against the wall, Nelson decides to take part in a robbery that will change his life.",
      ],
    },
  },
  {
    id: 6,
    title: "O eco da liberdade",
    image: upcoming6,
    details: {
      title: "O eco da liberdade",
      creditLine: "Dir. Luís Walter Germano, Prod. Adão Carlos Albano",
      instagramLinks: [
        { label: "@shortcutzluanda", url: "https://www.instagram.com/shortcutzluanda/" },
      ],
      subtitle: "The Echo of Freedom - Uma voz contra o silêncio",
      portugueseText: [
        "Num lugar onde a repressão transforma o silêncio em lei, um homem decide falar. Sozinho diante de uma câmara, ele confronta memórias, medos e um país que parece não estar mais disposto a ouvir. A cada palavra que ele pronuncia, um ato de resistência surge silenciosamente.",
        "The Echo of Freedom é um retrato íntimo e minimalista do poder de uma única voz em tempos de censura - um filme que questiona: quando todos se calam, o que resta do direito de existir?",
      ],
      englishText: [
        "In a place where repression turns silence into law, one man chooses to speak. Alone in front of a camera, he confronts memories, fears, and a country that no longer seems willing to listen. With every word he utters, an act of resistance quietly emerges.",
        "The Echo of Freedom is an intimate and minimalist portrait of the power of a single voice in times of censorship - a film that asks: when everyone goes quiet, what remains of the right to exist?",
      ],
    },
  },
];

interface SectionSliderProps {
  title: string;
}

export const SectionSlider = ({ title }: SectionSliderProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [language, setLanguage] = useState<Language>("pt");
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (!carouselApi || isDialogOpen) {
      return;
    }

    const autoScrollInterval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 2500);

    return () => {
      window.clearInterval(autoScrollInterval);
    };
  }, [carouselApi, isDialogOpen]);

  const openDetails = (item: ContentItem) => {
    if (!item.details) {
      return;
    }

    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const activeDescription =
    language === "pt"
      ? selectedItem?.details?.portugueseText ?? []
      : selectedItem?.details?.englishText ?? [];

  return (
    <section className="py-12 bg-black px-6 md:px-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter border-l-4 border-primary pl-4">
          {title}
        </h2>
        <div className="inline-flex items-center rounded-full border border-white/20 p-1">
          <button
            type="button"
            onClick={() => setLanguage("pt")}
            className={`rounded-full px-2.5 py-1 text-base leading-none transition-colors ${
              language === "pt" ? "bg-white text-black" : "text-white hover:text-primary"
            }`}
            aria-label="Portuguese"
          >
            🇵🇹
          </button>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-full px-2.5 py-1 text-base leading-none transition-colors ${
              language === "en" ? "bg-white text-black" : "text-white hover:text-primary"
            }`}
            aria-label="English"
          >
            🇬🇧
          </button>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setCarouselApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <Card
                  className={`bg-transparent border-0 rounded-xl overflow-hidden group ${
                    item.details ? "cursor-pointer" : "cursor-default"
                  }`}
                  onClick={() => openDetails(item)}
                >
                  <CardContent className="p-0 relative aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.details ? (
                      <div className="absolute bottom-3 right-3 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold tracking-wider text-white">
                        View details
                      </div>
                    ) : null}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] max-w-6xl overflow-y-auto border-0 bg-transparent p-0 text-white shadow-none">
          {selectedItem?.details ? (
            <div className="rounded-[2rem] border border-white/20 bg-black p-4 sm:p-6">
              <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
                <div className="overflow-hidden rounded-[1.75rem] border border-white/20 bg-black">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <DialogTitle className="text-2xl leading-tight text-white md:text-3xl">
                        {selectedItem.details.title}
                      </DialogTitle>
                      <DialogDescription className="flex items-center gap-2 text-sm text-white/80">
                        <span>{selectedItem.details.creditLine}</span>
                        {selectedItem.details.instagramLinks?.map((instagramLink) => (
                          <a
                            key={instagramLink.url}
                            href={instagramLink.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={instagramLink.label}
                            className="inline-flex items-center gap-1 rounded-full border border-white/40 px-2 py-1 text-[11px] text-white transition-colors hover:bg-white hover:text-black"
                          >
                            <Instagram className="h-3.5 w-3.5" />
                            <span>{instagramLink.label}</span>
                          </a>
                        ))}
                      </DialogDescription>
                    </div>
                  </div>

                  {selectedItem.details.subtitle ? (
                    <p className="text-sm font-medium text-white/75">{selectedItem.details.subtitle}</p>
                  ) : null}

                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {language === "pt" ? "Sinopse" : "Synopsis"}
                  </h3>

                  <div className="space-y-4 text-sm leading-relaxed text-white/85 md:text-base">
                    {activeDescription.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="inline-flex items-center rounded-full border border-white/30 bg-black p-1">
                    <button
                      type="button"
                      onClick={() => setLanguage("pt")}
                      className={`rounded-full px-2.5 py-1 text-base leading-none transition-colors ${
                        language === "pt" ? "bg-white text-black" : "text-white hover:text-primary"
                      }`}
                      aria-label="Portuguese"
                    >
                      🇵🇹
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`rounded-full px-2.5 py-1 text-base leading-none transition-colors ${
                        language === "en" ? "bg-white text-black" : "text-white hover:text-primary"
                      }`}
                      aria-label="English"
                    >
                      🇬🇧
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};



