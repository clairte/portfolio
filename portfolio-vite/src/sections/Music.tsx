import FadeInWhenVisible from "../components/FadeInWhenVisible";
import LinkButton from "../components/buttons/LinkButton";
import ProjectCard from "../components/ProjectCard";
import AudioThumbnail from "../components/AudioThumbnail";

import studioClaire from "../assets/music/studio-claire.jpg";
import humanOrchestra from "../assets/music/human-orchestra-2.jpg";
import melonDoodle from "../assets/doodles/miroodles-melon.png";

// 100 Song Challenge assets
import liuliAudio from "../assets/music/100-songs/audio/song 2 - 琉璃 (demo).mp3";
import theCureAudio from "../assets/music/100-songs/audio/song 4 - the cure (demo).mp3";
import fallAudio from "../assets/music/100-songs/audio/song 5 - fall (demo).mp3";
import strangerAudio from "../assets/music/100-songs/audio/song 7 - stranger (demo).mp3";
import liuliImg from "../assets/music/100-songs/images/liuli thumbnail.png";
import theCureImg from "../assets/music/100-songs/images/the cure thumbnail.png";
import fallImg from "../assets/music/100-songs/images/fall thumbnail.png";
import strangerImg from "../assets/music/100-songs/images/stranger thumbnail.png"; 


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
      </FadeInWhenVisible>

      {/* 100 Song Challenge */}
      <FadeInWhenVisible>
        <div className="flex justify-center">
          <ProjectCard
            title="What About Your Story?"
            locationTime="100 Song Challenge for 100 Strangers • 2025 - Present"
            media={
              <div className="space-y-6">
                {/* Audio thumbnail grid */}
                <div className="flex flex-wrap justify-center gap-4">
                  <AudioThumbnail
                    imageSrc={strangerImg}
                    audioSrc={strangerAudio}
                    title="陌生人"
                    subtitle=""
                  />
                  <AudioThumbnail
                    imageSrc={fallImg}
                    audioSrc={fallAudio}
                    title="fall"
                    subtitle=""
                  />
                  <AudioThumbnail
                    imageSrc={theCureImg}
                    audioSrc={theCureAudio}
                    title="the cure"
                    subtitle=""
                  />
                  <AudioThumbnail
                    imageSrc={liuliImg}
                    audioSrc={liuliAudio}
                    title="琉璃"
                    subtitle=""
                  />
                </div>

                {/* Social media links */}
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <LinkButton 
                    href="https://xhslink.com/m/362uDgi4Nhm" 
                    label="📕 小红书"
                  />
                  <LinkButton 
                    href="https://v.douyin.com/Q0YIvO7co90/" 
                    label="🎵 抖音"
                  />
                </div>
              </div>
            }
          >
            <p>
              Through my social media account, I picked (and ongoing!) 100 strangers with 100 different stories to tell, 
              and created unique customizable songwriting experience for each person. I showcase each song on my social 
              media platform, including the background story and how I produce and mix each song from start to finish. Checkout 
              my social media accounts for more details! These songs will be mixed and mastered to all music platforms soon.
            </p>
          </ProjectCard>
        </div>
      </FadeInWhenVisible>

      {/* Ferris Wheels EP */}
      <FadeInWhenVisible>
        <div className="flex justify-center">
          <ProjectCard
            title="Ferris Wheels Step Over Seasons (EP demo)" 
            locationTime="Released 2022"
            media={
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <img 
                  src={studioClaire}
                  alt="ferris-wheels"
                  className="w-52 rounded-xl shadow-sm"
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
        </div>
      </FadeInWhenVisible>
      

      {/* Music Project 2 */}
      <FadeInWhenVisible>
        <div className="flex justify-center">
            <ProjectCard
              title="Human Orchestra - A cappella Collections"
              locationTime="2020 - 2023"
              media={
                <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src={humanOrchestra}
                  alt="human-orchestra"
                  className="w-52 rounded-xl shadow-sm"
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
        </div>
      </FadeInWhenVisible>
      

      {/* Check out My Music button */}
      <FadeInWhenVisible>
        <div className="flex justify-center">
          <LinkButton 
            href="https://soundcloud.com/user-852192298/sets" 
            label="🎧 Check out more of my music here!"
          />
        </div>
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
