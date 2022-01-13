/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";

export default function MainFooter() {
  const donors = [
    {
      url: "/FUGA.png",
    },
    {
      url: "/SM-Entertainment.png",
    },
    {
      url: "/yg.png",
    },
    {
      url: "/empire.png",
    },
    {
      url: "/sony.png",
    },
    {
      url: "/monstercat.png",
    },
    {
      url: "/universal-1.png",
    },
    {
      url: "/Kakao-M.png",
    },
    {
      url: "/beggers.png",
    },
    {
      url: "/orcahrd.png",
    },
  ];
  const [nearList, setNearList] = useState([
    {
      image: "/edm-list.webp",
      name: "Everyday EDM",
    },
    {
      image: "/edm-list.webp",
      name: "Everyday EDM",
    },
    {
      image: "/edm-list.webp",
      name: "Everyday EDM",
    },
    {
      image: "/edm-list.webp",
      name: "Everyday EDM",
    },
    {
      image: "/edm-list.webp",
      name: "Everyday EDM",
    },
  ]);
  return (
    <div className="px-[92px] py-[24px]  ">
      <p className="text-center uppercase mb-[24px] text-[#FFFFFF80] tracking-[1.5px] text-[12px] font-bold ">
        Đối tác âm nhạc
      </p>
      <div className=" flex justify-center flex-wrap gap-[20px]">
        {donors.map((donor, index) => (
          <div key={index} className="">
            <img
              src={donor.url}
              alt=""
              className="rounded-[12px] w-[121px] h-[68px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
