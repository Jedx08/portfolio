import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import ScrollAnimation from "./ui/ScrollAnimation";

const Skills = () => {
  return (
    <div id="skills" className="py-10 h-[50vh] max-[478px]:h-fit">
      <div className="text-[#e2e8f0] text-4xl font-bold text-center py-5 mt-10 max-[871px]:text-3xl">
        <ScrollAnimation>Skills</ScrollAnimation>
      </div>
      <div className="text-[#94a3b8] text-6xl flex flex-wrap items-center justify-center">
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.25}>
            <SiHtml5
              title="HTML"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.3}>
            <SiJavascript
              title="JavaScript"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.35}>
            <SiTypescript
              title="TypeScript"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.4}>
            <SiReact
              title="React JS"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.45}>
            <SiNextdotjs
              title="Next JS"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.5}>
            <SiNodedotjs
              title="Node JS"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.5}>
            <SiMongodb
              title="MongoDB"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
        <div className="py-4 px-8">
          <ScrollAnimation delaySec={0.6}>
            <SiTailwindcss
              title="Tailwind CSS"
              className="mx-auto transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Skills;
