import {
  adwise,
  coffee,
  gif,
  music,
  pagination,
  qr,
  quotes,
  workshop,
  worldRank,
} from "@/public/images";
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <h2>Projects</h2>

      <div className="grid grid-col-1 md:grid-cols-3 gap-5 my-5 p-5 ">
        <ProjectItem
          href="https://workshop-roan.vercel.app/"
          title="Workshop"
          skills="Next js + Tailwind + MongoDB"
        >
          <ImageComponent
            src={workshop}
            alt="Workshop project"
            width={300}
            height={200}
          />
        </ProjectItem>

        <ProjectItem
          href="https://adwise-nextjs.vercel.app/"
          title="Adwise"
          skills="Next js + Tailwind"
        >
          <ImageComponent
            src={adwise}
            alt="Adwise project"
            width={300}
            height={200}
          />
        </ProjectItem>

        <ProjectItem
          href="https://world-rank-kohl.vercel.app/"
          title="Adwise"
          skills="React js + Tailwind"
        >
          <ImageComponent
            src={worldRank}
            alt="World Rank project"
            width={300}
            height={200}
          />
        </ProjectItem>

        <ProjectItem
          href="https://qr-generator-coral.vercel.app/"
          title="QR Generator"
          skills="Next js + Tailwind + MongoDB"
        >
          <ImageComponent src={qr} alt="QR project" width={300} height={200} />
        </ProjectItem>

        <ProjectItem
          href="https://random-quots.vercel.app/"
          title="Random Quotes"
          skills="React js + Tailwind"
        >
          <ImageComponent
            src={quotes}
            alt="Random Quotes project"
            width={300}
            height={200}
          />
        </ProjectItem>

        <ProjectItem
          href="https://gifs-app-ten-omega.vercel.app/"
          title="Gif"
          skills="React js + Vite"
        >
          <ImageComponent
            src={gif}
            alt="Gif project"
            width={300}
            height={200}
            classname="object-fill"
          />
        </ProjectItem>

        <ProjectItem
          href="https://coffee-listing-theta.vercel.app/"
          title="Coffee Listing"
          skills="React js + Tailwind"
        >
          <ImageComponent
            src={coffee}
            alt="Coffee project"
            width={300}
            height={200}
          />
        </ProjectItem>

        <ProjectItem
          href="https://pagination-gold-nu.vercel.app/"
          title="Pagination"
          skills="React js + Vite + Tailwind"
        >
          <ImageComponent
            src={pagination}
            alt="Pagination project"
            width={300}
            height={200}
          />
        </ProjectItem>

        <ProjectItem
          href="https://music-app-cyan-one.vercel.app/"
          title="Music"
          skills="React js + Vite + Tailwind"
        >
          <ImageComponent
            src={music}
            alt="Music project"
            width={300}
            height={200}
          />
        </ProjectItem>

       
      </div>
    </section>
  );
};

export default Projects;
