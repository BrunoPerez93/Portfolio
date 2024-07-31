import SkillComponent from "./SkillComponent";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start items-center h-full p-5 w-full my-5"
    >
      <div className="w-full mb-5">
        <h2 className="text-2xl md:text-4xl font-semibold text-start">
          My Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-white text-center text-xl font-bold">
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
    </section>
  );
};

export default Skills;
