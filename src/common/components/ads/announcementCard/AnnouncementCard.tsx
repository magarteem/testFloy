import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { BodyAds } from "../bodyAds/BodyAds";
import { HeaderAds } from "../headerAds/HeaderAds";
import s from "./announcementCard.module.scss";

interface AnnouncementCardType {
  x: TimelineCards;
}

export const AnnouncementCard = ({ x }: AnnouncementCardType) => {
  return (
    <>
      <HeaderAds required={x.required.label} payment={x.payment} />
      <BodyAds
        city={x.city.label}
        commitAbout={x.commitAbout}
        genre={x.genre}
        publicationDate={x.publicationDate}
        tools={x.tool}
        typeOfInstitution={x.typeOfInstitution}
      />
    </>
  );
};
