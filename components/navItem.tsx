/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faChartLine,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle, faStar } from "@fortawesome/fontawesome-free-regular";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import {useEffect,useRef} from 'react'

export default function NavItem() {
  const Music = faMusic as IconProp;
  const ChartLine = faChartLine as IconProp;
  const DotCircle = faDotCircle as IconProp;
  const Star = faStar as IconProp;
  const Plus = faPlus as IconProp;

  const option1 = [
    {
      icon: Music,
      name: "Cá Nhân",
    },
    {
      icon: DotCircle,
      name: "Khám Phá",
    },
    {
      icon: ChartLine,
      name: "#zingchart",
    },
    {
      icon: Music,
      name: "Radio",
    },
    {
      icon: Music,
      name: "Theo dõi",
    },
  ];

  const option2 = [
    {
      icon: Music,
      name: "Nhạc Mới",
    },
    {
      icon: DotCircle,
      name: "Thể Loại",
    },
    {
      icon: Star,
      name: "Top 100",
    },
    {
      icon: Music,
      name: "MV",
    },
  ];
  const iconPlayRef = useRef(null);
  useEffect(()=>{

  },[])
  return (
    <section className="fixed bg-[#231b2e] text-white w-[240px] ">
      <div className="pt-[15px] pb-[16px] ">
        <div className="px-[28px]">
          <img src="logo-dark.svg" alt="" className="w-[120px] h-[40px]"></img>
        </div>
        <ul className=" relative py-[20px] after:absolute after:bg-[#ffffff1a] after:w-[192px] after:h-[0.5px] after:bottom-0 after:left-[24px]">
          {option1.map((option, index) => (
            <li key={index} className=" cursor-pointer  ">
              <Link href="/">
                <a className=" px-[28px] flex items-center py-[7px]  text-[13px] font-[700] text-[#dadada] hover:text-white focus:border-l-[3px] focus:border-[#7200a1] focus:bg-[#393243]">
                  <FontAwesomeIcon
                    icon={option.icon}
                    className="w-[24px] mr-[12px] "
                  />
                  {option.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-h-[280px] overflow-y-auto ">
        <ul className=" pb-[20px]  ">
          {option2.map((option, index) => (
            <li key={index} className=" cursor-pointer  ">
              <Link href="/">
                <a className=" px-[28px]  flex items-center py-[7px] text-[13px] font-[700] text-[#dadada] hover:text-white  focus:border-l-[3px] focus:border-[#7200a1] focus:bg-[#393243]">
                  <FontAwesomeIcon
                    icon={option.icon}
                    className="w-[24px] mr-[12px]"
                  />
                  {option.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-[200px] h-[105px] bg-[#7200a1] rounded-[8px] text-center mx-auto px-[15px] py-[8px] mb-[16px]">
          <p className="text-[13px] font-bold mb-[15px]">
            Đăng nhập để khám phá playlist dành riêng cho bạn
          </p>
          <span>
            <Link href="/a">
              <a className="px-[35px] font-bold py-[6px] text-[13px] border-[1px] rounded-[16px] uppercase ">
                Đăng Nhập
              </a>
            </Link>
          </span>
        </div>
        <div className="w-[200px] h-[105px] bg-blue-pink rounded-[8px]  text-center mx-auto px-[15px] py-[8px] mb-[16px]  ">
          <p className="text-[13px] font-bold mb-[15px]">
            Nghe nhạc không quảng cáo cùng kho nhạc VIP
          </p>
          <span>
            <Link href="/a">
              <a className="px-[35px] font-bold py-[6px] text-[#000] text-[13px] bg-[#ffdb00] rounded-[16px] uppercase ">
                Nâng cấp vip
              </a>
            </Link>
          </span>
        </div>
      </div>
      <div className="border-t-[1px] border-[#ffffff1a] py-[16px]">
        <span className=" flex font-bold text-[14px] ml-[28px]">
          <FontAwesomeIcon icon={Plus} className="w-[20px] h-[20px] mr-[8px]" />
          Tạo playlist mới
        </span>
      </div>
    </section>
  );
}
