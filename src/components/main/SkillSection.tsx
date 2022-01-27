
import { FaDatabase, FaServer,FaToolbox,FaPencilAlt} from "react-icons/Fa"
import {RiComputerLine} from "react-icons/Ri"
import {useScrollTrigger} from '../hooks/useScrollTrigger'

type ScrollTriggerType = {
    name: string;
};

export const SkillSection =() =>{
    const name:ScrollTriggerType = {name:'wrapper-skill'};
    useScrollTrigger(name);

    return (
        <section id='skill' className="text-gray-600 body-font">
            <div className="pt-20 w-full wrapper" id = "wrapper-skill">
                <h1 className="flex items-center px-6 lg:w-3/5 text-5xl text-gray-800 font-serif">Skill</h1>
                <div className="container py-10 px-6 mx-auto">
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <RiComputerLine color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">フロントエンド</h2>
                            <li className="leading-relaxed text-base">JavaScript</li>
                            <li className="leading-relaxed text-base">TypeScript</li>
                            <li className="leading-relaxed text-base">React</li>
                            <li className="leading-relaxed text-base">ReactNative</li>
                            <li className="leading-relaxed text-base">HTML/CSS</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaServer color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">バックエンド</h2>
                            <li className="leading-relaxed text-base">Java</li>
                            <li className="leading-relaxed text-base">Node.js</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaDatabase color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">データベース</h2>
                            <li className="leading-relaxed text-base">Oracle</li>
                            <li className="leading-relaxed text-base">MongoDB</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaToolbox color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">ツール</h2>
                            <li className="leading-relaxed text-base">git</li>
                            <li className="leading-relaxed text-base">SVN</li>
                            <li className="leading-relaxed text-base">Insomnia</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 flex-shrink-0">
                            <FaPencilAlt color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">資格</h2>
                            <li className="leading-relaxed text-base">基本情報技術者</li>
                            <li className="leading-relaxed text-base">AWS認定 ソリューションアーキテクト -アソシエイト-</li>
                            <li className="leading-relaxed text-base">G検定</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}