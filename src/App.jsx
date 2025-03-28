import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      {/* text-[#e2e8f0] text-[#94a3b8] */}
      <div id="about" className="px-3 xl:px-10 2xl:px-20">
        <Navbar />

        {/* profile */}
        <Profile />

        {/* skills */}
        <Skills />

        {/* expereince */}
        <Experience />

        {/* project */}
        <Projects />

        {/* contanct form */}
        <ContactForm />
      </div>
    </>
  );
}

export default App;
