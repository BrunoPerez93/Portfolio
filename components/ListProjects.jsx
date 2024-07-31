import {
  workshop,
  adwise,
  gifApp,
  coffee,
  qr,
  music,
  pagination,
  quotes,
  worldRank,
} from "../public/images/index";
import LinkComponent from "./LinkComponent";
import ImageComponent from "./ImageComponent";

const ListProjects = () => {
  return (
    <div className="grid grid-cols-3 gap-5 w-full h-full">
      <LinkComponent href="https://workshop-roan.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">Workshop</h2>
        <ImageComponent src={workshop} alt="Workshop project" />
      </LinkComponent>

      <LinkComponent href="https://adwise-nextjs.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">Adwise Page</h2>

        <ImageComponent src={adwise} alt="Adwise project" />
      </LinkComponent>

      <LinkComponent href="https://world-rank-kohl.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">
          World Rank Page
        </h2>

        <ImageComponent src={worldRank} alt="World Rank project" />
      </LinkComponent>

      <LinkComponent href="https://qr-generator-coral.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">
          QR Generator Page
        </h2>

        <ImageComponent src={qr} alt="QR project" />
      </LinkComponent>

      <LinkComponent href="https://random-quots.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">
          Random Quotes Page
        </h2>

        <ImageComponent src={quotes} alt="Random Quotes project" />
      </LinkComponent>

      <LinkComponent href="https://gifs-app-ten-omega.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">Gif Page</h2>
        <div className="h-full w-full p-5 rounded-md">
          <iframe 
            src="https://giphy.com/embed/l1JoiLBzP3XjvOryo" 
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </LinkComponent>

      <LinkComponent href="https://coffee-listing-theta.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">
          Coffee Listing Page
        </h2>

        <ImageComponent src={coffee} alt="Coffee project" />
      </LinkComponent>

      <LinkComponent href="https://pagination-gold-nu.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">
          Pagination Page
        </h2>

        <ImageComponent src={pagination} alt="Pagination project" />
      </LinkComponent>

      <LinkComponent href="https://music-app-cyan-one.vercel.app/">
        <h2 className="text-xl font-semibold text-center p-2">Music Page</h2>

        <ImageComponent src={music} alt="Music project" />
      </LinkComponent>



    </div>
  );
};

export default ListProjects;
