import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";
import ScrollAnimation from "./ui/ScrollAnimation";

const Navbar = () => {
  const childRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (childRef.current && !childRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="py-1 sticky z-10 w-full top-0">
      <ul className="flex items-center justify-end text-[#e2e8f0] text-2xl font-bold bg-[#1e293b95] px-10 py-3 shadow-sm bg-opacity-50 rounded-lg backdrop-blur max-[871px]:justify-center max-[871px]:text-xl max-[720px]:hidden">
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md relative overflow-hidden block">
          <ScrollAnimation fadeUp={-10} delaySec={0.2}>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About
            </a>
          </ScrollAnimation>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <ScrollAnimation fadeUp={-10} delaySec={0.25}>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
              Skills
            </a>
          </ScrollAnimation>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <ScrollAnimation fadeUp={-10} delaySec={0.35}>
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, "experience")}
            >
              Experience
            </a>
          </ScrollAnimation>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <ScrollAnimation fadeUp={-10} delaySec={0.35}>
            <a href="#project" onClick={(e) => handleScroll(e, "project")}>
              Project
            </a>
          </ScrollAnimation>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <ScrollAnimation fadeUp={-10} delaySec={0.4}>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
              Contact
            </a>
          </ScrollAnimation>
        </li>
      </ul>
      <div className="hidden max-[720px]:block">
        <div
          ref={childRef}
          onMouseDown={handleClickInside}
          className={`flex justify-end text-[#e2e8f0] font-bold bg-[#1e293b95] px-5 py-1 shadow-sm bg-opacity-50 rounded-lg backdrop-blur ${
            isOpen ? "flex-col items-end" : "items-center"
          }`}
        >
          <button
            onClick={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}
            className="cursor-pointer p-2 rounded-[50%] hover:bg-[#1e293b] active:bg-[#1e293b]"
          >
            {isOpen ? (
              <RxCross2 className="text-4xl" />
            ) : (
              <RxHamburgerMenu className="text-4xl" />
            )}
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.2 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                exit={{ opacity: 0 }}
              >
                <ul className="absolute top-16 left-0 flex flex-col items-end justify-end text-xl p-1 text-[#e2e8f0] rounded-lg w-full bg-[#1e293bed] shadow-sm transition-all duration-500 scale-100">
                  <a
                    href="#about"
                    onClick={(e) => handleScroll(e, "about")}
                    className="w-full"
                  >
                    <li className="px-5 py-2 hover:bg-[#2f3f5a] cursor-pointer rounded-md text-center">
                      About
                    </li>
                  </a>

                  <a
                    href="#skills"
                    onClick={(e) => handleScroll(e, "skills")}
                    className="w-full"
                  >
                    <li className="px-5 py-2 hover:bg-[#2f3f5a] cursor-pointer rounded-md w-full text-center">
                      Skills
                    </li>
                  </a>

                  <a
                    href="#experience"
                    onClick={(e) => handleScroll(e, "experience")}
                    className="w-full"
                  >
                    <li className="px-5 py-2 hover:bg-[#2f3f5a] cursor-pointer rounded-md w-full text-center">
                      Experience
                    </li>
                  </a>

                  <a
                    href="#project"
                    onClick={(e) => handleScroll(e, "project")}
                    className="w-full"
                  >
                    <li className="px-5 py-2 hover:bg-[#2f3f5a] cursor-pointer rounded-md w-full text-center">
                      Project
                    </li>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="w-full"
                  >
                    <li className="px-5 py-2 hover:bg-[#2f3f5a] cursor-pointer rounded-md w-full text-center">
                      Contact
                    </li>
                  </a>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
