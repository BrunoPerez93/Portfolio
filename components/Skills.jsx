import SkillComponent from "./SkillComponent";
import { skills, website } from "@/public/images";
import ImageComponent from "./ImageComponent";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center md:h-screen h-full px-10 w-full my-5"
    >
      <div className="w-full mb-5 flex space-x-5">
        <h2 className="text-2xl md:text-5xl font-semibold text-start hover:text-[#E7983B]">
          My Skills
        </h2>
        <ImageComponent src={skills} alt="Skills" width={40} height={20} />
      </div>

      <div className="flex md:flex-row gap-5 flex-col-reverse">
        <div className="space-y-2 md:w-1/2">
          <div className="flex space-x-5">
            <h2 className="font-semibold text-2xl md:text-4xl">
              I love building websites
            </h2>
            <ImageComponent src={website} alt="Website" width={40} height={20} />
          </div>
          <p className="font-light text-xl">
            I'm all about crafting websites that not only look great but feel
            amazing to use. React and Next.js are my go-to tools for building
            responsive that adapt to any screen. I'm obsessed with creating
            intuitive interfaces that users love to interact with. Whether
            it's optimizing performance or fine-tuning animations, I'm always
            pushing to make the user experience smoother and more enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-white text-center items-center md:text-xl text-sm font-bold">
          <SkillComponent name="HTML" />
          <SkillComponent name="CSS" />
          <SkillComponent name="Javascript" />
          <SkillComponent name="React js" />
          <SkillComponent name="React Native" />
          <SkillComponent name="Next js" />
          <SkillComponent name="Tailwind" />
          <SkillComponent name="Boostrap" />
          <SkillComponent name="PostgreSQL" />
          <SkillComponent name="MongoDB" />
          <SkillComponent name="Firebase" />
          <SkillComponent name="GitHub" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
