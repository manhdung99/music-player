/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlayCircle } from "@fortawesome/fontawesome-free-regular";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export default function MainContent() {
  const Heart = faHeart as IconProp;
  const PlayCircle = faPlayCircle as IconProp;

  const [items, setItems] = useState([
    {
      title: "Gần Đây",
      list: [
        {
          image: "/edm-list.webp",
          name: "Everyday EDM",
        },
        {
          image: "/globalX.webp",
          name: "Global X",
        },
        {
          image: "/Dance-viet.webp",
          name: "Dance Việt Ngày Nay",
        },
        {
          image: "/US-UK.webp",
          name: "Today Top's Hit",
        },
        {
          image: "/K-Pop.webp",
          name: "K-POP Unique",
        },
        {
          image: "/K-Pop.webp",
          name: "K-POP Unique",
        },
      ],
    },
    {
      title: "Lựa Chọn Hôm Nay",
      list: [
        {
          image: "/v-pop.webp",
          name: "V-Pop Rising",
          content:
            "Khám phá những tài năng Gen Z của V-Pop trước khi họ bùng nổ",
        },
        {
          image: "/globalX.webp",
          name: "Global X",
          content: "Những bài hát giúp cuộc sống thêm nhộn nhịp",
        },
        {
          image: "/Dance-viet.webp",
          name: "Dance Việt Ngày Nay",
          content: "Những bài hát giúp cuộc sống thêm nhộn nhịp",
        },
        {
          image: "/US-UK.webp",
          name: "Today Top's Hit",
          content: "Những bài hát giúp cuộc sống thêm nhộn nhịp",
        },
        {
          image: "/K-Pop.webp",
          name: "K-POP Unique",
          content: "Những bài hát giúp cuộc sống thêm nhộn nhịp",
        },
      ],
    },
    {
      title: "XONE's CORNER",
      list: [
        {
          image: "/summer-hit.webp",
          name: "Throwback Summer Hits",
          content:
            "Những bài hát được phát hành và thu hút sự chú ý trong mùa dịch ",
        },
        {
          image: "/bts.webp",
          name: "BTS x Steve Aoki",
          content: "Khi những tài năng âm nhạc bắt tay tạo hit",
        },
        {
          image: "/asia-tune.webp",
          name: "Asia Tune - Sing along",
          content: "Giai điệu khiến bạn lắc lư và hát theo",
        },
        {
          image: "/daily-xone.webp",
          name: "Daily XONE's Picks",
          content: "F5 là có nhạc mới mỗi ngày",
        },
        {
          image: "/indie-hit.webp",
          name: "Indie Hits",
          content: "Lạc vào thế giới Indie và tìm những sắc màu mới",
        },
      ],
    },
  ]);

  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      let newData = items;
      if (newData[i].list.length > 5) {
        const newList = newData[i].list.slice(0, 5);
        newData[i].list = [...newList];
        setItems([...newData]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-[60px] px-[60px]">
      {items.map((item, index) => (
        <div key={index} className="mb-[30px]">
          <p className="text-white text-[20px] font-bold mb-[15px]">
            {item.title}
          </p>
          <div className="grid grid-cols-5">
            {item.list.length > 0 &&
              item.list.map((data: any, dataindex: React.Key) => (
                <div
                  key={dataindex}
                  className=" group mb-[24px]  overflow-hidden z-0 relative"
                >
                  <Link href="/playList">
                    <a>
                      <div className="rounded-[8px] w-[214px] h-[214px] overflow-hidden">
                        <img
                          src={data.image}
                          alt=""
                          className="w-[214px]  group-hover:scale-105 duration-[500ms] rounded-[8px]"
                        ></img>
                      </div>
                      <div className=" absolute w-[214px] h-[214px]  left-0 top-0 bg-gray-400 rounded-[8px] opacity-30 hidden group-hover:block"></div>
                    </a>
                  </Link>
                  <div className="text-white flex gap-[24px] items-center justify-center absolute bottom-[50%] left-[50%] translate-x-[-50%] hidden group-hover:flex">
                    <Link href="/">
                      <a title="Thêm vào yêu thích">
                        <span className="opacity-100">
                          <FontAwesomeIcon icon={Heart} className="icon-20" />
                        </span>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <span className="opacity-100">
                          <FontAwesomeIcon
                            icon={PlayCircle}
                            className="icon-40"
                          />
                        </span>
                      </a>
                    </Link>
                    <Link href="/">
                      <a className="mb-[12px]" title="Khác">
                        <span className="text-[24px] opacity-100">...</span>
                      </a>
                    </Link>
                  </div>
                  <p className="font-bold text-white mt-[4px]">{data.name}</p>
                  {data?.content && (
                    <p className=" text-[14px] text-[#FFFFFF80] pr-[20px] max-h-[42px] max-2-column">
                      {data.content}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
