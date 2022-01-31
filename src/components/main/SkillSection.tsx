
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
        <section id='skill' className="lg:h-auto text-gray-600 body-font">
            <div className="pt-20 w-full h-full lg:h-auto md:h-auto wrapper" id = "wrapper-skill">
                <h1 className="flex items-center px-6 lg:w-3/5 text-6xl text-gray-800 font-serif">Skill</h1>
                <div className="h-full grid gap-2 row-gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-20 px-6">
                    <div className="flex items-center lg:w-4/5 md:w-4/5 sm:w-4/5 mx-auto border-b pb-5 mb-5 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-sky-100 flex-shrink-0">
                            <RiComputerLine color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 tracking-widest">
                            <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">フロントエンド</h2>
                            <li className="leading-8 text-xl ">JavaScript</li>
                            <li className="leading-8 text-xl">TypeScript</li>
                            <li className="leading-8 text-xl">React</li>
                            <li className="leading-8 text-xl">ReactNative</li>
                            <li className="leading-8 text-xl">HTML/CSS</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-4/5 md:w-4/5 sm:w-4/5 mx-auto border-b pb-5 mb-5 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                            <FaServer color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 tracking-widest">
                            <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">バックエンド</h2>
                            <li className="leading-8 text-xl">Java</li>
                            <li className="leading-8 text-xl">Node.js</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-4/5 md:w-4/5 sm:w-4/5 mx-auto border-b pb-5 mb-5 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-200 flex-shrink-0">
                            <FaDatabase color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 tracking-widest">
                            <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">データベース</h2>
                            <li className="leading-8 text-xl">Oracle</li>
                            <li className="leading-8 text-xl">MongoDB</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-4/5 md:w-4/5 sm:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 flex-shrink-0">
                            <FaToolbox color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 tracking-widest">
                            <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">ツール</h2>
                            <li className="leading-8 text-xl">git</li>
                            <li className="leading-8 text-xl">SVN</li>
                            <li className="leading-8 text-xl">Insomnia</li>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-4/5 md:w-4/5 sm:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-300 flex-shrink-0">
                            <FaPencilAlt color="black" size={60}/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 tracking-widest">
                            <h2 className="text-gray-900 text-2xl title-font font-medium mb-2">資格</h2>
                            <li className="leading-8 text-xl">基本情報技術者</li>
                            <li className="leading-8 text-xl">AWS認定 SAA</li>
                            <li className="leading-8 text-xl">G検定</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}