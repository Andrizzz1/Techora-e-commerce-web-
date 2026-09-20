import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * npm i embla-carousel-react lucide-react
 *
 * Usage:
 * <CategoryCarousel
 *   categories={[
 *     { name: "Smartphones", image: "/img/smartphones.png" },
 *     { name: "Laptops", image: "/img/laptops.png" },
 *     { name: "TV & Audio", image: "/img/tv-audio.png" },
 *     { name: "Computers", image: "/img/computers.png" },
 *     { name: "Headphones", image: "/img/headphones.png" },
 *     { name: "Cameras", image: "/img/cameras.png" },
 *   ]}
 *   onSelect={(name) => console.log(name)}
 * />
 */

type Category = {
  name: string;
  image: string;
};

type CategoryCarouselProps = {
  categories: Category[];
  onSelect?: (name: string) => void;
};

export default function CategoryCarousel({ categories, onSelect }: CategoryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onEmblaSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onEmblaSelect();
    emblaApi.on("select", onEmblaSelect);
    emblaApi.on("reInit", onEmblaSelect);
  }, [emblaApi, onEmblaSelect]);

  const handlePick = (name: string, index: number) => {
    setActiveIndex(index);
    onSelect?.(name);
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl px-10 mt-10">
      <h2 className="mb-6 text-center text-xl font-semibold tracking-wide">Popular Categories
       <span className="mt-1 block mx-auto h-0.5 w-10 bg-blue-500" />
       </h2>

      {/* Prev button */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous"
        className="absolute left-0 top-[58%] z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center
                   rounded-full border border-gray-200 bg-white shadow-sm transition-opacity
                   disabled:opacity-30 hover:bg-gray-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {categories.map((cat, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={cat.name}
                onMouseEnter={() => handlePick(cat.name, index)}
                className={`flex min-w-[140px] flex-1 flex-col items-center gap-3 rounded-lg border bg-white py-6
                            transition-colors ${
                              isActive
                                ? "border-blue-600"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
              >
                <img src={cat.image} alt={cat.name} className="h-32 w-42 object-contain" />
                <span
                  className={`text-sm ${
                    isActive ? "text-blue-600 font-medium" : "text-gray-700"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next"
        className="absolute right-0 top-[58%] z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center
                   rounded-full border border-gray-200 bg-white shadow-sm transition-opacity
                   disabled:opacity-30 hover:bg-gray-50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}