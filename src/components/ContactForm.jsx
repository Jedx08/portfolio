import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";
import { IoIosSend, IoIosAlert, IoIosCheckmarkCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ScrollAnimation from "./ui/ScrollAnimation";

const ContactForm = () => {
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
    <div id="contact">
      <div className="text-[#e2e8f0] text-4xl font-bold text-center py-5 max-[615px]:pt-24 max-[871px]:text-3xl">
        <ScrollAnimation>Contact</ScrollAnimation>
      </div>
      <div className="px-20 py-5 max-[1016px]:px-10 max-[700px]:px-3">
        {/* form start */}
        <ScrollAnimation delaySec={0.3}>
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
        </ScrollAnimation>
        {/* form end */}

        <div className="py-5 mt-10">
          <ScrollAnimation delaySec={0.35}>
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
          </ScrollAnimation>
          <div className="flex items-center justify-center space-x-8 text-[#e2e8f0] text-4xl p-5">
            <ScrollAnimation delaySec={0.4}>
              <a
                href="https://github.com/Jedx08"
                target="_blank"
                title="github"
              >
                <SiGithub />
              </a>
            </ScrollAnimation>
            <ScrollAnimation delaySec={0.45}>
              <a
                href="https://web.facebook.com/jed.saez08"
                target="_blank"
                title="facebook"
              >
                <SiFacebook />
              </a>
            </ScrollAnimation>
            <ScrollAnimation delaySec={0.5}>
              <a
                href="https://www.linkedin.com/in/jed-ericson-saez-381b48252"
                target="_blank"
                title="linkedin"
              >
                <SiLinkedin />
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
