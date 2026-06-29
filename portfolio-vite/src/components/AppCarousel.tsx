import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface AppSlide {
  name: string;
  description: string;
  image: string;
  href: string;
  /** Which axis has letterbox bars to melt the picture into.
   *  'x' = bars left/right (tall image), 'y' = bars top/bottom (wide image). */
  fade: 'x' | 'y';
}

// Single-axis fade so only the edges that sit against a letterbox bar dissolve;
// the edges that reach the frame border stay crisp.
const FADE_MASK: Record<AppSlide['fade'], string> = {
  x: '[-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
  y: '[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]',
};

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
            {/* Screenshot — contained in a fixed 16:9 frame so all slides stay
                the same height regardless of the image's own aspect ratio.
                A blurred copy of the same image fills the letterbox bars so they
                glow with the image's own colors (ambient / Apple-Music style). */}
            <div className="relative aspect-video w-full rounded-xl border border-white/30 overflow-hidden flex items-center justify-center">
              {/* Layer 1 — ambient blurred fill for the letterbox bars (glows
                  with the image's own colors) */}
              <img
                src={app.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-90 saturate-150"
              />
              {/* Layer 2 — the SAME picture, same position (object-contain), only
                  blurred. Sits directly under the sharp layer so the sharp edges
                  melt into a blurred version of themselves, not the backdrop. */}
              <img
                src={app.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain scale-[1.03] blur-md"
              />
              {/* Layer 3 — sharp picture. Only the bar-side edges are masked so
                  they dissolve into the blurred copy beneath; the edges that
                  reach the frame border stay crisp. */}
              <img
                src={app.image}
                alt={`${app.name} app screenshot`}
                className={`relative w-full h-full object-contain ${FADE_MASK[app.fade]}`}
                loading="lazy"
              />
            </div>
            {/* One-line description */}
            <p className="text-base text-gray-800">
              • <span className="font-semibold">{app.name}</span> — {app.description}
            </p>
            {/* Site link */}
            <a
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start text-sm text-secondary hover:underline underline-offset-4"
            >
              <ExternalLink size={15} />
              Visit {app.name}
            </a>
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
