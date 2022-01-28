import Link from "next/link";

function Header() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center items-center text-5xl text-gray-800 h-full font-serif bg-orange-300">
          Keita Shimizu&apos;s Portfolio!!!!
      </div>
      <nav className="bg-white shadow sticky z-50 py-3">
        <div className="container text-right p-1 mx-auto text-gray-600 text-3xl capitalize font-serif">
            <a href="#profile" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Profile</a>

            <a href="#skill" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Skill</a>

            <a href="#works" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Works</a>

            <a href="#contact" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;