import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";

const ProjectItem = ({ href, title, skills, children }) => {
  return (
    <LinkComponent href={href}>
      <div className="flex flex-col justify-between items-center p-2 w-full h-full">
        <div className="w-full text-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-xl font-semibold pb-2 text-blue-500">{skills}</p>
        </div>
        {children}
      </div>
    </LinkComponent>
  );
};

export default ProjectItem;
