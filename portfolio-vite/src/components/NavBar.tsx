const NavBar = () => (
  <nav className="sticky top-4 z-50 flex justify-center">
    <ul className="flex flex-wrap gap-6 px-8 py-3 bg-secondary rounded-full shadow-lg shadow-black/10 border border-white/10 text-sm uppercase text-gray-300 ">
      <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
      <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
      <li><a href="#music" className="hover:text-white transition-colors duration-200">Music</a></li>
      <li><a href="#swe" className="hover:text-white transition-colors duration-200">SWE</a></li>
      <li><a href="#living-things" className="hover:text-white transition-colors duration-200">Living Things</a></li>
      <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
    </ul>
  </nav>
);

export default NavBar;
