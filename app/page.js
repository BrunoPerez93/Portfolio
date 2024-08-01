import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center">
      <Navbar />
      <About />
      <Skills />
      <Projects/>
      <Footer/>
    </main>
  );
}
