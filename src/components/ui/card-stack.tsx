"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";

type Card = {
  id: number;
  category?: string;
  image: string;
  content?: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset ?? 10;
  const SCALE_FACTOR = scaleFactor ?? 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    const intervalId = startFlipping();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const startFlipping = () => {
    const intervalId = window.setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
    return intervalId;
  };

  return (
    <div className="relative h-[80rem] w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="shadow-s/[0.1] absolute mt-36 flex h-60 w-full flex-col justify-between rounded-3xl border border-neutral-200 bg-sky-400 shadow-xl  md:h-60 md:w-96 dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <CardContainer className="inter-var ">
              <CardBody className="group/card border-black/[0.1 bg-opacity-99 min-h-[100%] w-full -translate-y-28 transform overflow-visible rounded-xl border  bg-slate-500 sm:w-[30rem] dark:border-white/[0.2] dark:bg-gray-800 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem
                  translateZ="100"
                  className="h-full w-full overflow-visible bg-transparent px-3"
                >
                  <Image
                    src={card.image}
                    height="200"
                    width="200"
                    className="h-full w-full overflow-visible rounded-xl object-cover"
                    alt="thumbnail"
                    style={{ objectFit: "contain" }}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        );
      })}
    </div>
  );
};
