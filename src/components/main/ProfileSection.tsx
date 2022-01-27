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
    <section id='profile' className="bg-white">
    <div  className="w-full px-6 py-8 mx-auto pt-20" id="wrapper-profile">
            <h1  className="text-5xl text-gray-800 font-serif">Profile</h1>
        <div className="items-center lg:flex">
            <div className="mt-4 ml-20 text-gray-500">
                <p>東京のIT企業でシステム開発を行なっているシステムエンジニアです。</p>
                <p>主にJavaとOracleSQLを用いたウォーターフォール型のシステム開発の業務に携わっています。</p>
                <p>趣味は映画鑑賞と旅行、トレーニングです。</p>
                <p>最近はフロントエンドやバックエンドに興味を持っています。
                    また、ネイティブアプリの開発も行なっています。
                </p>
            </div>
            <ContactIcons />
        </div>
    </div>
</section>
    )
}