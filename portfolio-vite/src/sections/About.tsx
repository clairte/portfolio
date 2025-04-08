import TextBlock from '../components/TextBlock';
import PhotoCard from '../components/PhotoCard';
import TextWithImage from '../components/TextWithImage';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

import pizzaClaire from '../assets/pizza-claire.jpg'; 


const About = () => {
  return (
    <section className="min-h-screen p-8 py-32 scroll-mt-24" id="about">
      <FadeInWhenVisible>
        <TextWithImage 
          photo={<PhotoCard src={pizzaClaire} alt="claire-pizza" size="lg" isCircle />}
          text={
            <TextBlock title="About Me">
              <p> Hi there! My name is Claire.</p>
              <p> I'm a full-stack software engineer, music producer, and singer-songwriter with a passion to create at the intersection of music and technology.</p>
              <p> I like music, code, cats, and building cool things.</p>
            </TextBlock>
          }
          />
      </FadeInWhenVisible>
    </section>
  )
};

export default About;
