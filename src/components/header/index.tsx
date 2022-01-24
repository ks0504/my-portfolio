import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
        // <header className="text-gray-600 body-font">
        //   <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        //     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        //       <a className="mr-5 hover:text-orange-400">Home</a>
        //       <a className="mr-5 hover:text-orange-400">About me</a>
        //       <a className="mr-5 hover:text-orange-400">Third Link</a>
        //       <a className="mr-5 hover:text-orange-400">Contact</a>
        //     </nav>
        //   </div>
        // </header>

    <nav className="bg-white shadow">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6">Profile</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6">Skill</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6">Works</a>

        <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>
    </div>
</nav>
  );
}

export default Header;