import React from "react";
import { CardsLayoutItem } from "../../layout/cardsLayoutItem/CardsLayoutItem";
import { FooterCards } from "./footerCards/FooterCards";
import { HeaderCards } from "./headerCards/HeaderCards";
import { InfoCards } from "./infoCards/InfoCards";
import s from "./timeLine.module.scss";

export const TimeLine = () => {
 return (
  <section className={s.timeline}>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>

   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>

   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
   <CardsLayoutItem>
    <HeaderCards />
    <InfoCards />
    <FooterCards />
   </CardsLayoutItem>
  </section>
 );
};
