import TextBlock from '../components/TextBlock';
import PhotoCard from '../components/PhotoCard';
import TextWithImage from '../components/TextWithImage';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import LayeredPhotos from '../components/LayeredPhotos';
import LinkButton from '../components/buttons/LinkButton';
import QuackingDuck from '../components/QuackingDuck';

import pizzaClaire from '../assets/about/pizza-claire.jpg'; 
import gettyClaire from '../assets/about/getty-claire.jpg';
import guitarClaire from '../assets/about/guitar-claire.jpg';



const About = () => {
  return (
    <section className="min-h-screen p-8 py-32 scroll-mt-24" id="about">
      {/* First About Block - Quick Intro */}
      <FadeInWhenVisible>
        <TextWithImage 
          photo={<PhotoCard src={pizzaClaire} alt="claire-pizza" size="lg" isCircle />}
          text={
            <TextBlock title="About Me">
              <p> Hi there! My name is Claire 徐若彤 [ɕy̌ ʐûɔ tʰʊ̌ŋ].</p>
              <p> I'm a music producer, singer-songwriter, and full-stack software engineer with a passion to create at the intersection of music and technology.</p>
              <p> I like music, code, cats, and building cool things.</p>
            </TextBlock>
          }
          />
      </FadeInWhenVisible>

      {/* Spacer with doodle */}
      <FadeInWhenVisible>
          <QuackingDuck />
      </FadeInWhenVisible>

      {/* Second About Block - Recap, Now and Next */}
      <FadeInWhenVisible>
        <TextWithImage 
          photoPosition="left"
          photo={
            <LayeredPhotos 
              topSrc={guitarClaire}
              bottomSrc={gettyClaire}
              altTop="claire-guitar"
              altBottom="claire-getty"
            />
          }
          text={
            <div className="space-y-6">
              <TextBlock>
                <p> Some more background, I guess.</p>
                <p> 
                  Graduated from UCLA in 2024 with a double degree in Linguistics & Computer Science (that's one degree) and Communications, then worked at TikTok Music as a backend engineer. 
                </p>
                <p>
                  After deciding I didn't want to spend my twenties climbing the ladder, I decided to leave and am now a freelance music producer and software engineer consultant for startups at CodeChef Consulting LLC. 
                </p>
                <p>
                  I'm always looking for a new challenge--reorienting my career towards music and tech, seeing where I can take myself using both technical, musical, and people skills. 
                  Reach out if you'd like to chat!
                </p>
              </TextBlock>
              <div className="flex flex-wrap gap-4 pt-2">
                <LinkButton href="/resume-fullstack.pdf" label="Resume" />
                <LinkButton href="https://soundcloud.com/user-852192298/tracks" label="Music" />
              </div>
            </div>
          }
        />
      </FadeInWhenVisible>
    </section>
  )
};

export default About;
