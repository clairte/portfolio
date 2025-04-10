import LinkButton from '../components/buttons/LinkButton';
import CopyButton from '../components/buttons/CopyButton';

const Contact = () => {
  return (
    <section className="relative min-h-[60vh] py-24 px-4 scroll-mt-24" id="contact">
      <div className="relative bg-paper-texture bg-[#c7c2b6] w-[90%] ml-[-5%] px-8 py-12 mx-auto">
        {/* Top Message */}
        <div className="text-center text-base sm:text-lg font-medium text-gray-800 mb-12 max-w-xl mx-auto leading-relaxed">
          I'm a little anti-social, please hesitate to reach out. 
          <br/> Just kidding - reach out to work together!
        </div>
        {/* Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-1/3 border-t border-gray-300" /> 
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-sm text-gray-500 text-center lg:text-left max-w-md">
            <p>Website developed by Claire Xu using React, Tailwind CSS, and Vite. With some excessive bothering of ChatGPT</p>
            <p>Doodle icons from Pablo Stanley's Miroodles collection</p>
            <p className="mt-2">&copy; 2025 All rights reserved.</p>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LinkButton href="https://www.linkedin.com/in/claire-xu-a29420164/" label="LinkedIn" />
            <LinkButton href="/resume-fullstack.pdf" label="Resume" />
            <LinkButton 
              href="https://soundcloud.com/user-852192298/tracks" 
              label="Music"
            />
            <CopyButton value="claireaxu@gmail.com" label="Email" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
