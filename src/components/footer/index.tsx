export const Footer =() =>{
    return(

<footer className="bg-white w-full py-8">
    <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li className="my-2">
                <a href="#profile" className="text-gray-400 hover:text-gray-800 transition-colors duration-200" >
                    Profile
                </a>
            </li>
            <li className="my-2">
                <a href="#skill" className="text-gray-400 hover:text-gray-800 transition-colors duration-200" >
                    Skill
                </a>
            </li>
            <li className="my-2">
                <a href="#works" className="text-gray-400 hover:text-gray-800 transition-colors duration-200" >
                    Works
                </a>
            </li>
            <li className="my-2">
                <a href="#contact" className="text-gray-400 hover:text-gray-800 transition-colors duration-200" >
                    Contact
                </a>
            </li>
        </ul>
    </div>
</footer>

    )
}