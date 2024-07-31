import { github, gmail, linkedin } from "@/public/images";
import LinkComponent from "./LinkComponent";
import ImageComponent from "./ImageComponent";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center h-screen bg-slate-900 w-full text-white"
    >
      <div className="my-5 space-y-3 md:w-1/2 w-full px-5 text-center md:text-start">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I’m Bruno</h1>
        <h1 className="text-3xl md:text-5xl font-bold relative underline-effect w-auto">
          Front-End Developer
        </h1>
      </div>

      <div className="flex justify-center items-center my-5 space-x-10 md:w-1/2 w-full px-5">
        <LinkComponent href="https://github.com/BrunoPerez93">
          <ImageComponent src={github} alt="Logo Github" />
        </LinkComponent>
        <LinkComponent href="www.linkedin.com/in/bruno-perez-07079324a">
          <ImageComponent src={linkedin} alt="Logo Linkedin" />
        </LinkComponent>

        <LinkComponent href="https://mail.google.com/">
          <ImageComponent src={gmail} alt="Logo Gmail" />
        </LinkComponent>
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center items-start text-2xl px-5 space-y-3">
        <p>Front-End Developer trained and creative in web development.</p>
        <p>
          Passionate about creating intuitive and functional interfaces to
          improve user experience.{" "}
        </p>
      </div>
    </section>
  );
};

export default About;
