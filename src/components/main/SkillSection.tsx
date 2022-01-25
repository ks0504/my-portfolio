
import { FaDatabase, FaServer,FaPencilAlt} from "react-icons/Fa"
import {RiComputerLine} from "react-icons/Ri"

export const SkillSection =() =>{
    return (
        <section id='skill' className="text-gray-600 body-font">
            <div className="container px-6 py-20 mx-auto">
                <h1 className="flex items-center lg:w-3/5 text-5xl font-bold text-gray-800 underline">Skill</h1>
                <div className="container py-10 mx-auto">
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <RiComputerLine color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 underline">フロントエンド</h2>
                            <li className="leading-relaxed text-base">aaaaapaaaadflkfkgfl</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaServer color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 underline">バックエンド</h2>
                            <li className="leading-relaxed text-base">aaaaapaaaadflkfkgfl</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaDatabase color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 underline">データベース</h2>
                            <li className="leading-relaxed text-base">aaaaapaaaadflkfkgfl</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaPencilAlt color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 underline">その他</h2>
                            <li className="leading-relaxed text-base">aaaaapaaaadflkfkgfl</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}