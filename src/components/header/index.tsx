import Link from "next/link";

function Header() {
  return (
    <>
      <div className="text-5xl p-10 font-serif">
        Keita Shimizu&apos;s Portfolio!!!!
      </div>
      {/* <nav className="bg-white shadow fixed top-0 left-0 right-0"> */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container flex items-center justify-center p-1 mx-auto text-gray-600 text-3xl capitalize">
            <a href="#profile" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Profile</a>

            <a href="#skill" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Skill</a>

            <a href="#works" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Works</a>

            <a href="#contact" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Header;