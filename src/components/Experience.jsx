import { data } from "../data/experienceData";
import ScrollAnimation from "./ui/ScrollAnimation";

const Experience = () => {
  const checkOddOrEven = (id) => {
    if (id % 2 === 0) {
      return 40;
    } else {
      return -40;
    }
  };

  return (
    <>
      <div
        id="experience"
        className="text-[#e2e8f0] text-4xl font-bold text-center pt-24 pb-5 max-[871px]:text-3xl"
      >
        <ScrollAnimation>Experience</ScrollAnimation>
      </div>
      <div className="max-w-[800px] mx-auto">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className="hover:bg-[#1e293b] hover:text-[#e2e8f0] text-[#94a3b8] cursor-default rounded-md pt-3 pb-8 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <ScrollAnimation
                delaySec={0.35}
                fadeUp={0}
                fadeRight={checkOddOrEven(i)}
              >
                <div className="text-[#e2e8f0] text-2xl font-bold text-center max-[1145px]:text-lg">
                  {d.company}
                </div>
                <div className="text-[#e2e8f0] text-lg font-base text-center">
                  {d.role}
                </div>
                <div className="text-[#e2e8f0] text-base text-center">
                  {d.year}
                </div>
                <div>
                  <ul className="list-disc text-base font-medium pl-8">
                    {d.responsibility.res1 && <li>{d.responsibility.res1}</li>}
                    {d.responsibility.res2 && <li>{d.responsibility.res2}</li>}
                    {d.responsibility.res3 && <li>{d.responsibility.res3}</li>}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
