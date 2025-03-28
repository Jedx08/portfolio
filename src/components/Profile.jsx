import profile from ".././media/profile.png";
import Jed_Ericson_Saez from ".././resume/Jed_Ericson_Saez.pdf";
import ScrollAnimation from "./ui/ScrollAnimation";

const Profile = () => {
  return (
    <div className="grid grid-cols-3 items-center h-[90vh] max-[1200px]:grid-cols-2 max-[871px]:flex max-[871px]:flex-col-reverse max-[871px]:h-fit max-[871px]:pt-10">
      <div className="text-[#94a3b8] col-span-2 max-[1200px]:col-span-1 max-[871px]:row-span-1">
        <ScrollAnimation delaySec={0.2}>
          <div className="text-[#e2e8f0] text-5xl font-bold text-end p-2 max-[1200px]:text-4xl max-[1200px]:text-center">
            Jed Ericson Saez
          </div>
        </ScrollAnimation>

        <ScrollAnimation delaySec={0.3}>
          <div className="text-[#e2e8f0] text-xl text-end font-semibold px-2 max-[1200px]:text-lg max-[1200px]:text-center">
            Full-Stack Web Developer
          </div>
        </ScrollAnimation>
        <ScrollAnimation delaySec={0.4}>
          <div className="text-lg p-2 text-center font-medium max-[1200px]:text-base">
            Hi, I&apos;m Jed Ericson Saez, a passionate Full-Stack Web Developer
            specialized in creating dynamic and responsive web applications.
            With a background in React.js, Tailwind CSS, Node Js and MongoDB, I
            strive to bring innovative ideas to life through clean and efficient
            code.
          </div>
        </ScrollAnimation>
        <ScrollAnimation delaySec={0.5}>
          <div className="w-fit mx-auto mt-2 transition-transform duration-300 ease-in-out hover:scale-105">
            <a
              href={Jed_Ericson_Saez}
              download="Jed_Ericson_Saez.pdf"
              className="border mt-3 bg-[#16202f] rounded-md cursor-pointer px-2 py-1 text-base font-semibold hover:bg-[#1e293b] hover:text-[#e2e8f0]"
            >
              Download Resume
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation delaySec={0.2} fadeUp={-20} durationSec={0.3}>
        <img
          src={profile}
          alt="picture"
          className="rounded-[50%] mx-auto w-96 max-[871px]:row-span-1 max-[871px]:w-72"
        />
      </ScrollAnimation>
    </div>
  );
};

export default Profile;
