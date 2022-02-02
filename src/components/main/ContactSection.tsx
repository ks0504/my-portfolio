import { MailButton } from "../button/MailButton";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import { ContactIcons } from "../icons/ContactIcons"

type ScrollTriggerType = {
  name: string;
};

export const ContactSection =() =>{

  const name:ScrollTriggerType = {name:'wrapper-contact'};
  useScrollTrigger(name);
  
    return (
    <section id='contact' className="h-screen text-gray-600 body-font">
      <div className="w-full h-full px-5 py-20 mx-auto" id="wrapper-contact">
        <h1  className="text-6xl text-gray-800 font-serif">Contact</h1>
        <div className="flex flex-col text-center text-2xl text-gray-900 pt-20">
          <p>ご覧いただきありがとうございます!!</p>
          <p>何かコメントありましたら、</p>
          <p>以下メールなどからご連絡ください!!</p>
        </div>
        <div className="flex justify-center mt-36">
          <MailButton />
        </div>
        <div className="flex justify-center mt-24">
          <ContactIcons />
        </div>
      </div>
    </section>
    )
}