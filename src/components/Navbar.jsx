import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="py-1 sticky z-10 w-full top-0">
      <ul className="flex items-center justify-end text-[#e2e8f0] text-2xl font-bold bg-[#1e293b95] px-10 py-3 shadow-sm bg-opacity-50 rounded-lg backdrop-blur max-[871px]:justify-center max-[871px]:text-xl max-[595px]:hidden">
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md relative overflow-hidden block">
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>
            About
          </a>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>
            Skills
          </a>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <a href="#project" onClick={(e) => handleScroll(e, "project")}>
            Project
          </a>
        </li>
        <li className="px-5 py-2 hover:bg-[#1e293b] cursor-pointer rounded-md">
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="hidden max-[595px]:block">
        <div
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

          {isOpen && (
            <div>
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
                  href="#project"
                  onClick={(e) => handleScroll(e, "project")}
                  className="w-full"
                >
                  {" "}
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
