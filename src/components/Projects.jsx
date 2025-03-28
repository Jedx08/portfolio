import yourgross from ".././media/yourgross.png";
import { FiExternalLink } from "react-icons/fi";
import ScrollAnimation from "./ui/ScrollAnimation";

const Projects = () => {
  return (
    <div id="project" className="mb-40">
      <div className="text-[#e2e8f0] text-4xl font-bold text-center pt-24 pb-5 max-[871px]:text-3xl">
        <ScrollAnimation>Project</ScrollAnimation>
      </div>
      <div className="hover:bg-[#1e293b] text-[#94a3b8] cursor-default hover:text-[#e2e8f0] rounded-md transition-transform duration-300 ease-in-out hover:scale-[1.03]">
        <div className="grid grid-cols-2 px-20 rounded-lg py-5 max-[1339px]:px-5 max-[1275px]:flex max-[1275px]:flex-col-reverse">
          <div className="w-fit mx-auto flex flex-col items-center justify-center">
            <ScrollAnimation>
              <a href="https://yourgross.ph/" target="_blank">
                <div className="text-[#e2e8f0] text-2xl font-bold text-center py-2 flex items-center justify-center space-x-1 max-[1145px]:text-xl">
                  <div>Yourgross.ph</div>
                  <FiExternalLink />
                </div>
              </a>
            </ScrollAnimation>

            <ScrollAnimation delaySec={0.3}>
              <div className="text-base font-medium text-center">
                Yourgross.ph is a powerful and intuitive web application
                designed to help employees, SME business owners, and
                entrepreneurs effectively track and manage their finances. The
                platform provides clear insights into daily, weekly, monthly,
                and yearly income, including metrics like gross, sales,
                expenses, net income, and profit. Built using modern
                technologies such as React.js, Express.js, Node.js, MongoDB, and
                Tailwind CSS, the application delivers a seamless and responsive
                user experience. Securely deployed on cPanel with a custom
                domain from Namecheap, yourgross.ph empowers users to make
                informed financial decisions with ease.
              </div>
            </ScrollAnimation>
            <div className="flex flex-wrap items-center justify-center text-[#e2e8f0] py-5">
              <ScrollAnimation delaySec={0.2}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md w-fit mx-auto">
                    React
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.25}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md w-fit whitespace-nowrap mx-auto">
                    Node JS
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.3}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    Express JS
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.35}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md w-fit mx-auto">
                    MongoDB
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.4}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    Tailwind CSS
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.45}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    RESTful API
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.5}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    cPanel
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delaySec={0.6}>
                <div className="py-3 px-2">
                  <div className="bg-[#1e293b] border px-3 py-1 rounded-md whitespace-nowrap w-fit mx-auto">
                    Namecheap
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation>
            <div className="flex items-center justify-center h-full">
              <div className="max-w-[420px] mx-auto rounded-lg overflow-hidden relative max-[1275px]:w-[384px] max-[454px]:h-full max-[454px]:w-full">
                <div className="transition-transform duration-500 ease-in-out hover:scale-110">
                  <a href="https://yourgross.ph/" target="_blank">
                    <img src={yourgross} alt="yourgross" />
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
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Projects;
