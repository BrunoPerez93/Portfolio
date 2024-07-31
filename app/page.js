import About from "@/components/About";
import ListProjects from "@/components/ListProjects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center">
      <Navbar />
      <About />
      <Skills />
      <ListProjects />
    </main>
  );
}
