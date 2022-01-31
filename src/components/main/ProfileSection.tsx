import Link from 'next/link'
import {AiOutlineMail} from 'react-icons/Ai'
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import { ContactIcons } from '../icons/ContactIcons'

type ScrollTriggerType = {
    name: string;
  };

export const ProfileSection = () => {

  const name:ScrollTriggerType = {name:'wrapper-profile'};
  useScrollTrigger(name);

    return (
        <section id='profile' className="bg-white h-screen">
            <div  className="w-full h-full px-6 py-8 mx-auto pt-20" id="wrapper-profile">
                <h1  className="text-6xl text-gray-800 font-serif">Profile</h1>
                <div className="items-center p-10">
                    <div className="text-2xl mt-4 sm:mx-20 md:mx-32 lg:mr-80 lg:ml-32 text-gray-500 pb-10 tracking-widest leading-10 whitespace-normal">
                        <p>東京のIT企業でシステム開発を行なっているシステムエンジニアです。</p>
                        <p>主にJavaとOracleSQLを用いたウォーターフォール型のシステム開発の業務に携わっています。</p>
                        <p>趣味は映画鑑賞と旅行、トレーニングです。</p>
                        <p>最近はフロントエンドやバックエンドに興味を持っています。
                            また、ネイティブアプリの開発も行なっています。
                        </p>
                    </div>
                    <div className='lg:ml-24 md:ml-24'>
                        <ContactIcons />
                    </div>
                </div>
            </div>
        </section>
    )
}