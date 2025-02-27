import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import profile from "./media/profile.png";
import yourgross from "./media/yourgross.png";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiFacebook,
  SiLinkedin,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { IoIosSend, IoIosAlert, IoIosCheckmarkCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Jed_Ericson_Saez from "./resume/Jed_Ericson_Saez.pdf";

function App() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errStatus, setErrStatus] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [sucStatus, setSucStatus] = useState(false);
  const [sucMsg, setSucMsg] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrStatus(false);
    setErrMsg("");
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      return setErrStatus(true), setErrMsg("Name is required");
    }

    if (!email) {
      return setErrStatus(true), setErrMsg("Email is required");
    }

    if (!message) {
      return setErrStatus(true), setErrMsg("Message is required");
    }

    setLoading(true);

    const data = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setName("");
            setEmail("");
            setMessage("");
            setLoading(false);
            setSucStatus(true);
            setSucMsg("Message sent. Thank you for sending me a message.");
            setTimeout(() => {
              setSucStatus(false);
              setSucMsg("");
            }, 3000);
          }
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      {/* text-[#e2e8f0] text-[#94a3b8] */}
      <div id="about" className="px-3 xl:px-10 2xl:px-20">
        <Navbar />
        {/* profile start */}
        <div className="grid grid-cols-3 items-center h-[50vh] max-[1200px]:grid-cols-2 max-[871px]:flex max-[871px]:flex-col-reverse max-[871px]:h-fit max-[871px]:pt-10">
          <div className="text-[#94a3b8] col-span-2 max-[1200px]:col-span-1 max-[871px]:row-span-1">
            <div className="text-[#e2e8f0] text-5xl font-bold text-end p-2 max-[1200px]:text-4xl max-[1200px]:text-center">
              Jed Ericson Saez
            </div>
            <div className="text-[#e2e8f0] text-xl text-end font-semibold px-2 max-[1200px]:text-lg max-[1200px]:text-center">
              Full-Stack Web Developer
            </div>
            <div className="text-lg p-2 text-center font-medium max-[1200px]:text-base">
              Hi, I&apos;m Jed Ericson Saez, a passionate Full-Stack Web
              Developer specialized in creating dynamic and responsive web
              applications. With a background in React.js, Tailwind CSS, Node Js
              and MongoDB, I strive to bring innovative ideas to life through
              clean and efficient code.
            </div>
            <div className="w-fit mx-auto mt-2">
              <a
                href={Jed_Ericson_Saez}
                download="Jed_Ericson_Saez.pdf"
                className="border mt-3 bg-[#16202f] rounded-md cursor-pointer px-2 py-1 text-base font-semibold hover:bg-[#1e293b] hover:text-[#e2e8f0]"
              >
                Download Resume
              </a>
            </div>
          </div>
          <img
            src={profile}
            alt="picture"
            className="rounded-[50%] mx-auto w-96 max-[871px]:row-span-1 max-[871px]:w-72"
          />
        </div>
        {/* profile end */}

        {/* skills start */}
        <div id="skills" className="py-10 h-[50vh] max-[478px]:h-fit">
          <div className="text-[#e2e8f0] text-4xl font-bold text-center py-5 mt-10 max-[871px]:text-3xl">
            Skills
          </div>
          <div className="text-[#94a3b8] text-6xl flex flex-wrap items-center justify-center">
            <div className="py-4 px-8">
              <SiHtml5 title="HTML" className="mx-auto" />
            </div>
            <div className="py-4 px-8">
              <SiJavascript title="JavaScript" className="mx-auto" />
            </div>
            <div className="py-4 px-8">
              <SiTypescript title="TypeScript" className="mx-auto" />
            </div>
            <div className="py-4 px-8">
              <SiNodedotjs title="Node JS" className="mx-auto" />
            </div>
            <div className="py-4 px-8">
              <SiReact title="React JS" className="mx-auto" />
            </div>
            <div className="py-4 px-8">
              <SiMongodb title="MongoDB" className="mx-auto" />
            </div>
            <div className="py-4 px-8">
              <SiTailwindcss title="Tailwind CSS" className="mx-auto" />
            </div>
          </div>
        </div>
        {/* skills start */}

        {/* project start */}
        <div
          id="project"
          className="h-[70vh] max-[1145px]:h-fit max-[1145px]:pb-24"
        >
          <div className="text-[#e2e8f0] text-4xl font-bold text-center pt-24 pb-5 max-[871px]:text-3xl">
            Project
          </div>
          <div className="grid grid-cols-2 px-20 rounded-lg py-5 max-[1339px]:px-5 max-[1145px]:flex max-[1145px]:flex-col-reverse">
            <div className="w-fit mx-aut flex flex-col items-center justify-center">
              <a href="https://yourgross.ph/" target="_blank">
                <div className="text-[#e2e8f0] text-xl font-bold text-center py-2 flex items-center justify-center space-x-1 max-[1145px]:text-lg">
                  <div>Yourgross.ph</div>
                  <FiExternalLink />
                </div>
              </a>
              <div className="text-[#e2e8f0] text-lg font-semibold text-center py-1">
                Owner | Founder
                <div className="text-base">In Development</div>
              </div>
              <div className="text-[#94a3b8] text-base font-medium text-center">
                I am proud to introduce this comprehensive Income Tracker
                website that We developed to help users efficiently monitor
                their finances on a daily, monthly, and annual basis. This
                project is a testament to my skills in web development and my
                dedication to creating practical, user-friendly solutions.
              </div>
              <div className="flex items-center justify-center text-[#e2e8f0] py-5 max-[640px]:flex-wrap">
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md w-fit mx-auto">
                    React
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md w-fit whitespace-nowrap mx-auto">
                    Node JS
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    Express JS
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md w-fit mx-auto">
                    MongoDB
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    Tailwind CSS
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[384px] h-[255px] mx-auto rounded-lg overflow-hidden relative max-[454px]:h-full max-[454px]:w-full">
                <a href="https://yourgross.ph/" target="_blank">
                  <img src={yourgross} alt="yourgross" className="w-96" />
                  <div className="bg-[#1e293b] bg-opacity-80 absolute w-full h-full top-0 bottom-0 right-0 left-0 flex items-center justify-center space-x-3 opacity-0 hover:opacity-100">
                    <p className="text-[#e2e8f0] text-xl font-bold">
                      yourgross.ph
                    </p>
                    <FiExternalLink className="text-4xl text-[#e2e8f0] top-1/2 left-1/2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project end */}

        {/* contact start */}
        <div id="contact">
          <div className="text-[#e2e8f0] text-4xl font-bold text-center py-5 max-[615px]:pt-24 max-[871px]:text-3xl">
            Contact
          </div>
          <div className="px-20 py-5 max-[1016px]:px-10 max-[700px]:px-3">
            {/* form start */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="px-20 text-[#e2e8f0] max-w-[835px] mx-auto max-[700px]:px-3"
            >
              <div>
                <label>Name:</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md py-1 placeholder:text-[#e2e8f0] bg-[rgba(15,23,42,1)] border px-3"
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="w-full rounded-md py-1 placeholder:text-[#e2e8f0] bg-[rgba(15,23,42,1)] border px-3"
                />
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  required
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-md py-1 placeholder:text-[#e2e8f0] bg-[rgba(15,23,42,1)] border px-3 h-60"
                />
              </div>

              {/* send message status and loading start */}
              {errStatus && (
                <div className="text-base font-semibold text-center py-3 flex items-center justify-center space-x-1">
                  <IoIosAlert className="text-2xl" />
                  <p>{errMsg}</p>
                </div>
              )}
              {sucStatus && (
                <div className="text-base font-semibold text-center py-3 flex items-center justify-center space-x-1">
                  <IoIosCheckmarkCircle className="text-2xl" />
                  <p>{sucMsg}</p>
                </div>
              )}
              {!loading && (
                <div className="flex items-center justify-center space-x-2 border w-fit px-4 py-1 rounded-md mx-auto hover:bg-[#1e293b] mt-3">
                  <IoIosSend className="text-xl" />
                  <button
                    type="submit"
                    value="Send"
                    className="text-base font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              )}
              {loading && (
                <div className="flex items-center justify-center space-x-2 border w-fit px-4 py-1 rounded-md mx-auto bg-[#1e293b] mt-3 cursor-default select-none">
                  <IoIosSend className="text-xl" />
                  <div className="text-base font-semibold">
                    Sending Message...
                  </div>
                </div>
              )}
              {/* send message status and loading end */}
            </form>
            {/* form end */}

            <div className="py-5 mt-10">
              <div className="text-[#e2e8f0] flex flex-wrap justify-center items-center">
                <div className="flex items-center justify-center space-x-2 px-8 py-3">
                  <FaLocationDot className="text-3xl" />
                  <div className="text-start">
                    <div className="text-[#94a3b8] text-sm font-semibold">
                      Location
                    </div>
                    <div className="font-semibold">Antipolo City, Rizal PH</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 px-8 py-3">
                  <MdEmail className="text-3xl" />
                  <div className="text-start">
                    <div className="text-[#94a3b8] text-sm font-semibold">
                      Email
                    </div>
                    <div className="font-semibold">jedsaez08@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-8 text-[#e2e8f0] text-4xl p-5">
                <a
                  href="https://github.com/Jedx08"
                  target="_blank"
                  title="github"
                >
                  <SiGithub />
                </a>
                <a
                  href="https://web.facebook.com/jed.saez08"
                  target="_blank"
                  title="facebook"
                >
                  <SiFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/jed-ericson-saez-381b48252"
                  target="_blank"
                  title="linkedin"
                >
                  <SiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* contact end */}
      </div>
    </>
  );
}

export default App;
