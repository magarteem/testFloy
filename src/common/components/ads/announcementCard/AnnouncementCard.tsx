import { Link } from "react-router-dom";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { BodyAds } from "../bodyAds/BodyAds";
import { HeaderAds } from "../headerAds/HeaderAds";

interface AnnouncementCardType {
 x: TimelineCards;
 link: string;
 options?: any;
}

export const AnnouncementCard = ({
 x,
 link,
 options,
}: AnnouncementCardType) => {
 return (
  <>
   <HeaderAds x={x} link={link} options={options} />
   <Link to={link}>
    <BodyAds
     city={x.city.label}
     commitAbout={x.commitAbout}
     genre={x.genre}
     publicationDate={x.publicationDate}
     tools={x.tool}
     typeOfInstitution={x.typeOfInstitution}
    />
   </Link>
  </>
 );
};
