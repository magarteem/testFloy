import cn from "classnames";
import { memo, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrowRight.svg";
import { FilterModalLayout } from "../../common/layout/filterModalLayout/FilterModalLayout";
import s from "./style/galleryNew.module.scss";

interface GalleryType {
 skillsCategoryTitle: string;
 inspiration: string[];
}

export const Gallery = memo(
 ({ skillsCategoryTitle, inspiration }: GalleryType) => {
  const [sliderNumber, setSliderNumber] = useState(3);
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = (index: number) => {
   setOpenModal(true);
   setSliderNumber(index);
  };
  const handleClose = () => {
   setOpenModal(false);
   setSliderNumber(inspiration.length);
  };

  const handleArrowClick = () => {
   if (sliderNumber === inspiration.length - 1)
    setSliderNumber(0);
   else setSliderNumber(sliderNumber + 1);
  };

  const handleArrowClickReturn = () => {
   if (sliderNumber === 0)
    setSliderNumber(inspiration.length - 1);
   else setSliderNumber(sliderNumber - 1);
  };

  return (
   <div className={s.skills}>
    <div className={s.profileDataFields}>
     <h2>{skillsCategoryTitle}</h2>

     {openModal ? (
      <FilterModalLayout
       modalOpen={openModal}
       handleClose={handleClose}
       style={{
        "& .MuiDialog-container": {
         "& .MuiPaper-root": {
          background: "#000000",
          width: "100%",
          // height: "100%",
          margin: 0,
          padding: "16px",
          color: "#fff",
         },
        },
       }}
      >
       <div className={s.modalOpen}>
        <div className={s.photo}>
         <ArrowLeft
          onClick={handleArrowClickReturn}
          className={s.arrowLeft}
         />
         <img
          className={s.imgSlide}
          src={`${inspiration[sliderNumber]}`}
          alt={inspiration[sliderNumber]}
         />
         <ArrowRight
          onClick={handleArrowClick}
          className={s.arrowRight}
         />
         <span onClick={handleClose} className={s.closed}>
          ✕
         </span>
        </div>
       </div>
      </FilterModalLayout>
     ) : (
      <div className={s.skills_item}>
       <div className={s.containerImg}>
        {inspiration
         .slice(0, sliderNumber)
         .map((x, index) => {
          return (
           <div key={index} className={s.img}>
            <img
             src={x}
             alt={x}
             onClick={() => handleClickOpen(index)}
            />

            {index === sliderNumber - 1 &&
             index !== inspiration.length - 1 && (
              <span
               onClick={() =>
                setSliderNumber(inspiration.length)
               }
               className={cn({
                [s.lastImgAddMasck]:
                 index === sliderNumber - 1,
               })}
              >
               +{inspiration.length - sliderNumber}
              </span>
             )}
           </div>
          );
         })}
       </div>
      </div>
     )}
    </div>
   </div>
  );
 }
);

{
 /*<div className={s.skills_item}>
<div className={s.containerImg}>
  {inspiration.slice(0, sliderNumber).map((x, index) => {
    return (
      <div key={index} className={s.img}>
        <img src={x} alt={x} />

        {index === inspiration.length - 1 && (
          <span
            className={cn({
              [s.lastImgAddMasck]: index === inspiration.length - 1,
            })}
          >
            +{inspiration.length}
          </span>
        )}
      </div>
    );
  })}
</div>
</div>*/
}
