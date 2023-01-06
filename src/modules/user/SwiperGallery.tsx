import { useRef, useState } from "react";
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
 const swiperRef = useRef<any>(null);
 const [openModal, setOpenModal] = useState(false);

 const handleClickOpen = (index: number) => {
  setOpenModal(true);
  swiperRef.current?.swiper.slideTo(index);
 };

 const handleClose = () => setOpenModal(false);

 return (
  <div className={s.swiper}>
   <h2>{skillsCategoryTitle}</h2>

   <Swiper
    spaceBetween={1}
    speed={1500}
    autoplay
    modules={[Autoplay]}
    slidesPerView={"auto"}
   >
    {inspiration.map((x, index) => (
     <SwiperSlide key={x} className={s.swiperCard}>
      <div
       className={s.wrappImg}
       onClick={() => handleClickOpen(index)}
      >
       <img src={x} alt={x} />
      </div>
     </SwiperSlide>
    ))}
   </Swiper>

   <FilterModalLayout
    modalOpen={openModal}
    handleClose={handleClose}
    style={{
     "& .MuiDialog-container": {
      "& .MuiPaper-root": {
       background: "none",
       boxShadow: "none",
       width: "100%",
       margin: 0,
       color: "#fff",
       "& .swiper ": {
        width: "100%",

        "& .swiperCardIsOpenning": {
         width: "100% !important",
        },

        img: {
         width: "100% !important",
        },
       },

       "& .swiper-wrapper": {
        alignItems: "center !important",
       },
      },
     },
    }}
   >
    <Swiper
     ref={swiperRef}
     spaceBetween={1}
     speed={0}
     autoHeight={true}
    >
     {inspiration.map((x, index) => (
      <SwiperSlide
       key={index}
       className={s.swiperCardIsOpenning}
      >
       <img src={x} alt={x} />
      </SwiperSlide>
     ))}
    </Swiper>
   </FilterModalLayout>
  </div>
 );
};
