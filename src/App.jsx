import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css"

function App() {
   return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <Hero />
      <main className="px-4 py-6 space-y-10 max-w-6xl mx-auto">
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
