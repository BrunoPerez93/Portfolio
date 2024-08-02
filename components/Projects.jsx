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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center items-center p-5 pt-[100px]"
      id="projects"
    >
      <h2 className="font-bold md:text-5xl text-2xl underline hover:text-[#E7983B]">
        Projects
      </h2>

      <div className="grid grid-col-1 md:grid-cols-3 gap-5 my-5 p-5 ">
        <Link href="https://workshop-roan.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Workshop</CardTitle>
              <CardDescription>Next js + Tailwind + MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={workshop}
                alt="Workshop project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://adwise-nextjs.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Adwise</CardTitle>
              <CardDescription>Next js + Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={adwise}
                alt="Adwise project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://world-rank-kohl.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>World Rank</CardTitle>
              <CardDescription>React js + Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={worldRank}
                alt="World Rank project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://qr-generator-coral.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>QR Generator</CardTitle>
              <CardDescription>Next js + Tailwind + MongoDB</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={qr}
                alt="QR project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://random-quots.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Random Quotes</CardTitle>
              <CardDescription>React js + Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={quotes}
                alt="Random Quotes project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://gifs-app-ten-omega.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Gifs</CardTitle>
              <CardDescription>React js + Vite</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={gif}
                alt="Gif project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://coffee-listing-theta.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Coffee Listing</CardTitle>
              <CardDescription>React js + Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={coffee}
                alt="Coffee project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://pagination-gold-nu.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Pagination</CardTitle>
              <CardDescription>React js + Vite + Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={pagination}
                alt="Pagination project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://music-api-call.vercel.app/" target="_blank">
          <Card className="h-[380px] hover:bg-gray-500">
            <CardHeader>
              <CardTitle>Music Api Call</CardTitle>
              <CardDescription>Next js + Shadcn/ui + Tailwind</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageComponent
                src={music}
                alt="Music project"
                width={300}
                height={200}
              />
            </CardContent>
          </Card>
        </Link>

      </div>
    </section>
  );
};

export default Projects;
