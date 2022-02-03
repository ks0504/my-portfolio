import Image from "next/image";
import { useScrollTrigger } from "../hooks/useScrollTrigger";

type ScrollTriggerType = {
  name: string;
};

export const WorksSection = () => {

  const name:ScrollTriggerType = {name:'wrapper-works'};
  useScrollTrigger(name);

    return (
      <section id='works' className="lg:h-screen bg-white">
        <div className="px-6 py-8 w-full h-full mx-auto pt-20" id="wrapper-works">
            <h1 className="text-6xl text-gray-800 font-serif">Works</h1>
            <div className="grid py-10 sm:px-10 gap-8 row-gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-auto lg:w-auto lg:h-full transition duration-300 transform border-2 border-sky-200 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative w-full h-96">
                  <Image
                    src="/images/photo/my-portfolio.png"
                    layout="fill"
                    alt="my-portfolio"
                  />
                </div>
                <div className="px-6 py-8 border-0 rounded-b sm:px-8 bg-orange-300">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    Portfolio
                  </h5>
                  <div className="mb-5 text-gray-700">
                    <p>このポートフォリオです。</p>
                    <p>Next.js/TypeScript</p>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-sky-200 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    <a href="https://github.com/ks0504/my-portfolio" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-auto lg:w-auto lg:h-full transition duration-300 transform border-2 border-sky-200 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative  w-full h-96">
                  <Image
                    src="/images/photo/image-search.png"
                    layout="fill"
                    alt="image-search app"
                  />
                </div>
                <div className="px-6 py-8 border-0 rounded-b sm:px-8 bg-orange-300">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    Image Search App
                  </h5>
                  <div className="mb-5 text-gray-700">
                    <p>画像検索アプリ</p>
                    <p>React/TypeScript/pixabay API</p>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-sky-200 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    <a href="https://github.com/ks0504/image-search-app" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-auto lg:h-full transition duration-300 transform border-2 border-sky-200 bg-orange-300 rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative mx-auto w-64 h-96">
                  <Image
                    src="/images/photo/workout-mobileapp.png"
                    layout="fill"
                    alt="workout tracker mobile app"
                  />
                </div>
                <div className="px-6 py-8 border-0 rounded-b sm:px-8 bg-orange-300">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    Workout Tracker Mobile App
                  </h5>
                  <div className="mb-5 text-gray-700">
                    <p>ワークアウト管理アプリ</p>
                    <p>ReactNative/TypeScript</p>
                  </div>
                  <button
                    type="submit"
                    className="border-2 border-sky-200 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    <a href="https://github.com/yuchida-tamu/workout-tracker-mobile" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </section>
    );
  };