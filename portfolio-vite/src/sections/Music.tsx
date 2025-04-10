import FadeInWhenVisible from "../components/FadeInWhenVisible";
import LinkButton from "../components/buttons/LinkButton";
import ProjectCard from "../components/ProjectCard";

import studioClaire from "../assets/music/studio-claire.jpg";
import humanOrchestra from "../assets/music/human-orchestra-2.jpg";
import melonDoodle from "../assets/doodles/miroodles-melon.png"; 


const Music = () => {
  return (
    <section className="min-h-screen p-8 py-32 scroll-mt-24 space-y-8" id="music">
      <FadeInWhenVisible>
        <h1 className="text-center mb-2"> Musique </h1>
        <p className="text-[0.9rem] italic text-gray-600 text-justify mx-auto max-w-xl leading-relaxed">
          I love music. I sing, write, produce, and mix music that lives in the space between alt-RnB, indie, and pop. 
          Professionally, I interned at @ROOM4AStudio in China, a studio under Voice of China, and toplined over 10 songs for the studio song bank. 
          I also mix and master music, specializing in voice, using Pro Tools. 
        </p>
        <div className="flex justify-center mt-4">
          <LinkButton 
            href="https://soundcloud.com/user-852192298/tracks" 
            label="🎧 Check out My Music"
          />
        </div>
      </FadeInWhenVisible>

      {/* Music Project 1 */}
      <FadeInWhenVisible>
        <ProjectCard
          title="Ferris Wheels Step Over Seasons (EP demo)" 
          locationTime="Released 2023"
          media={
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <img 
                src={studioClaire}
                alt="ferris-wheels"
                className="w-52 rounded-xl shadow-sm"
                loading="lazy"
              />
              <div className="space-y-4 flex-1">
              <iframe 
                width="100%" 
                height="300" 
                allow="autoplay" 
                loading="lazy"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1227122296&color=%2390b7bf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
              </div>
            </div>
          }
        >
          <p>
            My first demo EP, genres range from Bossa Nova, alt-RnB, and pop. 
          </p>
        </ProjectCard>
      </FadeInWhenVisible>

      {/* Music Project 2 */}
      <FadeInWhenVisible>
          <ProjectCard
            title="Human Orchestra - A cappella Collections"
            locationTime="2020 - 2023"
            media={
              <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={humanOrchestra}
                alt="human-orchestra"
                className="w-52 rounded-xl shadow-sm"
                loading="lazy"
              />
              <div className="space-y-8 flex-1 py-2">
              <iframe 
                width="100%" 
                height="120" 
                allow="autoplay" 
                loading="lazy"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1158625192&color=%2390b7bf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
              <iframe 
                width="100%" 
                height="120" 
                allow="autoplay" 
                loading="lazy"
                src="https://open.spotify.com/embed/track/0O6jm4QLPOCauOxRLwoFdh?utm_source=generator&theme=0"
              />
              </div>
            </div>
            }
          >
          </ProjectCard>
      </FadeInWhenVisible>

      {/* Music Project 3 */}
      <FadeInWhenVisible>
          <ProjectCard
            title="100 Song Challenge"
          >
            Coming soon...
          </ProjectCard>
      </FadeInWhenVisible>

      {/* Spacer with doodle */}
      <FadeInWhenVisible>
        <div className="relative h-[20rem] w-full flex flex-col items-center justify-center space-y-4">
          <img 
            src={melonDoodle}
            alt="melon-doodle"
            className="w-32 opacity-70 animate-wiggle transition-transform hover:scale-110"
          />
          <p className="top-12 text-lg text-gray-600 font-medium italic hover:scale-110"> [watermelon] </p>
        </div>

      </FadeInWhenVisible>
    </section>
  )
};

export default Music;
