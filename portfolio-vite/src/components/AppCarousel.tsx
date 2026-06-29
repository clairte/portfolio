import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AppSlide {
  name: string;
  description: string;
}

interface AppCarouselProps {
  apps: AppSlide[];
}

const AppCarousel = ({ apps }: AppCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1"
      >
        {apps.map((app) => (
          <div
            key={app.name}
            className="snap-center shrink-0 w-[85%] flex flex-col gap-3"
          >
            {/* Picture placeholder (real screenshots added later) */}
            <div className="aspect-video w-full rounded-xl border border-dashed border-gray-300 bg-white/40 flex items-center justify-center text-gray-400 text-sm text-center px-4">
              {app.name} — screenshots coming soon
            </div>
            {/* One-line description */}
            <p className="text-base text-gray-800">
              • <span className="font-semibold">{app.name}</span> — {app.description}
            </p>
          </div>
        ))}
      </div>

      {/* Arrow layer: full width, height matches the image band (85% slide width @ 16:9)
          so the arrows center vertically on the placeholder image, not the whole slide. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[2.09]">
        <button
          type="button"
          aria-label="Previous app"
          onClick={() => scroll(-1)}
          className="pointer-events-auto absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white bg-secondary/70 hover:bg-secondary backdrop-blur-md border border-white/20 shadow-md transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next app"
          onClick={() => scroll(1)}
          className="pointer-events-auto absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white bg-secondary/70 hover:bg-secondary backdrop-blur-md border border-white/20 shadow-md transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AppCarousel;
