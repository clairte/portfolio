import FlipCard from "../components/FlipCard";

import kat1 from '../assets/living-things/kat1.png';
import kat2 from '../assets/living-things/kat2.png';
import kat3 from '../assets/living-things/kat3.jpg';
import fish from '../assets/living-things/fish.jpg';
import cabbage1 from '../assets/living-things/cabbage1.jpg';
import cabbage2 from '../assets/living-things/cabbage2.png';
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const LivingThings = () => (
  <section className="min-h-screen px-8 py-20 scroll-mt-36 space-y-16" id="living-things">
    {/* Title & Description */}
    <FadeInWhenVisible>
        <h1 className="text-center mb-2"> Living Things </h1>
        <p className="text-[0.9rem] italic text-gray-600 text-center mx-auto max-w-xl whitespace-pre-line leading-relaxed">
          Beings I share space with — they meow, swim, crawl, and stare into my soul.{"\n"}
          垫垫 [tjɛn tjɛn] Kat is an ADORABLE but crazy cat.{"\n"}
          囡囡 [nan nan] Cabbage is our snake (since some are scared of snakes, flip to see){"\n"}
          Some guppies, danios, shrimps, and puffer in the water. 
        </p>
    </FadeInWhenVisible>

    {/* Responsive Grid of Pet Images */}
    <FadeInWhenVisible>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          kat1,
          kat2,
          kat3,
          fish,
          cabbage1,
          cabbage2,
        ].map((src, index) => {
          const isFlip = src === cabbage1 || src === cabbage2;
          return isFlip ? (
              <FlipCard 
                key={index}
                frontLabel="flip to see noodle 🐍"
                backImageSrc={src}
                alt="snake-1"
              />
          ) : (
            <div
              key={`image-${index}`}
              className="aspect-square overflow-hidden rounded-xl shadow-md"
            >
              <img 
                src={src}
                alt={`pet-${index}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )
        })}
      </div>
    </FadeInWhenVisible>
  </section>
);

export default LivingThings;
