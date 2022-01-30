import Particles from "react-tsparticles"

export const Footer =() =>{
    return(

<div className="bg-white w-full py-2 flex flex-col max-w-screen-xl mx-auto px-4">
        {/* <ul className="max-w-screen-md mx-auto text-xl font-light flex flex-wrap justify-between font-serif">
            <li className="my-4">
                <a href="#profile" className="text-gray-500 hover:text-gray-800 transition-colors duration-200" >
                    Profile
                </a>
            </li>
            <li className="my-4">
                <a href="#skill" className="text-gray-500 hover:text-gray-800 transition-colors duration-200" >
                    Skill
                </a>
            </li>
            <li className="my-4">
                <a href="#works" className="text-gray-500 hover:text-gray-800 transition-colors duration-200" >
                    Works
                </a>
            </li>
            <li className="my-4">
                <a href="#contact" className="text-gray-500 hover:text-gray-800 transition-colors duration-200" >
                    Contact
                </a>
            </li>
        </ul> */}
        <>
            {/* <Particles options={Params as RecursivePartial<IOptions>} /> */}
        </>
        <nav className="bg-white z-50 py-3">
            <div className="container text-center p-1 mx-auto text-gray-500 text-2xl capitalize font-serif">
                <a href="#profile" className="px-5 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Profile</a>

                <a href="#skill" className="px-5 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Skill</a>

                <a href="#works" className="px-5 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Works</a>

                <a href="#contact" className="px-5 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform hover:border-orange-300 mx-1.5 sm:mx-6">Contact</a>
            </div>
      </nav>
</div>

    )
}