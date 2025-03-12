"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";

const Blog_Item = ({email, id, title, desc, image, timeStamp }) => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/reading/${email}/${id}`);
  };
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-800 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
          >
            {desc}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="https://twitter.com/mannupaaji"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Read more →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {timeStamp}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Blog_Item;
