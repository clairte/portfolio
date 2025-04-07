import AnimatedText from "../components/AnimatedText";

const Home = () => (
  <div className="min-h-screen flex items-center justify-center">
    <AnimatedText 
      text={`hello there, my name is claire. relunctantly welcoming you...\njk. scroll to gossip.`}
      className="text-xl sm:text-2xl font-medium"
    />
  </div>
);

export default Home;
