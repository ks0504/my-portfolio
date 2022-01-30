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
            <h1 className="text-5xl text-gray-800 font-serif">Works</h1>
            <div className="grid py-10 sm:px-10 gap-8 row-gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-auto lg:w-auto lg:h-80 transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80"
                    src="##"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8 bg-orange-300">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    work1
                  </h5>
                  <p className="mb-5 text-gray-700">
                    work1の説明
                  </p>
                  <button
                    type="submit"
                    className="bg-sky-200 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="w-auto lg:w-auto lg:h-80 transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80"
                    src="##"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8 bg-orange-300">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    work2
                  </h5>
                  <p className="mb-5 text-gray-700">
                    work2の説明
                  </p>
                  <button
                    type="submit"
                    className="bg-sky-200 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="w-auto lg:w-auto lg:h-80 transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                  <img
                    className="object-cover w-full h-64 rounded-t lg:h-80"
                    src="##"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8 bg-orange-300">
                  <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                    work3
                  </h5>
                  <p className="mb-5 text-gray-700">
                    work3の説明
                  </p>
                  <button
                    type="submit"
                    className="bg-sky-200 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
        </div>
      </section>
    );
  };