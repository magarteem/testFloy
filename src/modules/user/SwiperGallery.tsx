import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FilterModalLayout } from "../../common/layout/filterModalLayout/FilterModalLayout";
import s from "./style/gallery.module.scss";
import "swiper/css";

interface SwiperGalleryType {
 inspiration: string[];
 skillsCategoryTitle: string;
}

export const SwiperGallery = ({
 skillsCategoryTitle,
 inspiration,
}: SwiperGalleryType) => {
 const [openModal, setOpenModal] = useState(false);
 const [sliderNumber, setSliderNumber] = useState(0);

 const handleClickOpen = (index: number) => {
  setOpenModal(true);
  setSliderNumber(index);
 };
 const handleClose = () => {
  setOpenModal(false);
 };

 return (
  <div className={s.swiper}>
   <Swiper
    spaceBetween={1}
    speed={1500}
    autoplay
    modules={[Autoplay]}
    slidesPerView={"auto"}
    //style={{ display: "flex" }}
   >
    {inspiration.map((x, index) => (
     <SwiperSlide key={x} className={s.swiperCard}>
      {/*<FilterModalLayout
       modalOpen={openModal}
       handleClose={handleClickOpen}
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
      >*/}
      <div
       className={s.wrappImg}
       onClick={() => handleClickOpen(index)}
      >
       <img src={x} alt={x} />
      </div>
      {/*</FilterModalLayout>*/}
     </SwiperSlide>
    ))}
   </Swiper>

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
       // padding: "16px",
       color: "#fff",
      },
     },
    }}
   >
    <img src={inspiration[sliderNumber]} alt="111" />
   </FilterModalLayout>
  </div>
 );
};
