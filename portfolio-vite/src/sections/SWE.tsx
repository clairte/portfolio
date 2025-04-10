import FadeInWhenVisible from '../components/FadeInWhenVisible';
import ProjectCard from '../components/ProjectCard';
import LinkButton from '../components/buttons/LinkButton';

import tiktokUpload from '../assets/swe/tiktok-cat-upload.png';
import tiktokWaiting from '../assets/swe/tiktok-cat-waiting.png';
import homeless from '../assets/swe/homeless.png'; 
import phoneDoodle from '../assets/doodles/miroodles-phone.png';
import hiDoodle from '../assets/doodles/miroodles-hi.png'; 


const SWE = () => {
  return (
    <section className="min-h-screen p-8 py-32 scroll-mt-24 space-y-8" id="swe">
      <FadeInWhenVisible>
        <h1 className="text-center mb-2"> Software Engineering </h1>
        <p className="text-[0.9rem] italic text-gray-600 text-center mx-auto max-w-xl whitespace-pre-line leading-relaxed">
          read if you're lazy to download resume / this is a bit cooler:{"\n"}
          Coding is cool, building software is cooler. 
          While I have most experience in backend development and primarily work on backend systems, I also love to sometimes dabble in frontend, product, and other parts of the software development process.
        </p>
      </FadeInWhenVisible>

      <div className="space-y-12">
        {/* Project 1*/}
        <div className="flex justify-center">
          <FadeInWhenVisible>
            <ProjectCard 
              title="TikTok Music - Backend Software Engineer"
              locationTime="San Jose, CA • 2024 - 2025"
              skills="Go • RPC • HTTP • SQL/NoSQL • Redis • Docker • Kubernetes"
            >
              <p> • Design and develop RPC & HTTP APIs for music promotion products, including algorithmic music discovery, label services that generated near 1M~ revenue </p>
              <p> • Optimized quota calculation and storage system for  algorithmic promotion services </p>
              <p> If you're confused... Think of the "promotion products" as "Amazon but for music labels", where labels can "shop" for their own flavor of advertisement products. 
                Just as Amazon needs to keep track of their inventory, we need to keep track of the available quota for each "promotion product".
              </p>
            </ProjectCard>
          </FadeInWhenVisible>
        </div>
        

        {/* Project 2*/}
        <div className="flex justify-center">
          <FadeInWhenVisible>
            <ProjectCard 
              title="TikTok Audio/Video - Software Engineer Intern"
              locationTime="San Jose, CA • Summer 2023"
              skills="C++ • Java • Android • Video Processing"
              media={
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* images section */}
                  <div className="flex gap-20">
                    <img src={tiktokUpload} alt="tiktok-upload" className="w-44 md:w-52 rounded-xl shadow-sm"/>
                    <img src={tiktokWaiting} alt="tiktok-waiting" className="w-44 md:w-52 rounded-xl shadow-sm"/>
                    <div className="flex flex-col items-center justify-center">
                      <img 
                        src={phoneDoodle} 
                        alt="duck-doodle" 
                        className="opacity-70 animate-wiggle transition-transform hover:scale-110"
                      />
                      <p className="text-xs italic text-gray-500 mt-2 text-center max-w-[8rem]"> 
                        less waiting time for your tiktok vids, basically... 
                      </p>
                    </div>
                  </div>
                </div>
              }
            >
              <p> Reduced upload latency by ~200ms for android devices by replacing Java encoder API with faster C++ encoder APIs</p>
            </ProjectCard>
          </FadeInWhenVisible>
        </div>
        
        {/* Project 3*/}
        <div className="flex justify-center">
          <FadeInWhenVisible>
            <ProjectCard
              title="Homeless Simulator - Best WebApp" 
              locationTime="Los Angeles, CA • QwerHacks 2023"
              skills="React • JavaScript • MUI • Vercel"
              media={
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <img
                      src={homeless}
                      alt="Homeless Simulator Screenshot"
                      className="max-w-[800px] max-h-[600px] rounded-xl shadow-sm items-center"
                    />
                  </div>
                  <LinkButton href="https://github.com/clairte" label="→ Visit Homeless Simulator" />
              </div>
              }
            >
              <p> Choose-your-own-adventure webapp game to raise awareness for housing security and the unhoused population. 
              Multiple endings... All depends on you... </p>
              <p> Best Webapp of Housing Track at QwerHacks 2023 </p>
            </ProjectCard>
          </FadeInWhenVisible>
        </div>
        {/* Spacer with doodle */}
      <FadeInWhenVisible>
        <div className="relative h-[20rem] w-full flex flex-col items-center justify-center space-y-4">
          <img 
            src={hiDoodle}
            alt="hi-doodle"
            className="w-32 opacity-70 animate-wiggle transition-transform hover:scale-110"
          />
          <p className="top-12 text-lg text-gray-600 font-medium italic hover:scale-110"> hi! </p>
        </div>

      </FadeInWhenVisible> 
      </div>
    </section>
  );
};

export default SWE;
