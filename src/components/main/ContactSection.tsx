import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { ContactIcons } from "../icons/ContactIcons"

type ScrollTriggerType = {
  name: string;
};

export const ContactSection =() =>{

  const name:ScrollTriggerType = {name:'wrapper-contact'};
  useScrollTrigger(name);
  
    return (
    <section id='contact' className="text-gray-600 body-font">
  <div className="w-full px-5 py-24 mx-auto" id="wrapper-contact">
    <h1  className="text-5xl text-gray-800 font-serif">Contact</h1>
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 pt-10">contact!!!</h2>
      <button className="flex-shrink-0 text-white bg-orange-300 border-0 py-2 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg mt-10 ml-10">
        <a href="mailto:k.shimizu.268@nitech.jp" target="_blank" rel="noopener noreferrer">
        Contact me
        </a>
      </button>
    </div>
      <div className="mt-10">
        <ContactIcons />
      </div>
  </div>
</section>
    )
}