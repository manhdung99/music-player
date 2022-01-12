/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic,faChartLine,faPlus,faRandom,faStepBackward,faStepForward,faRedo,faMicrophoneAlt,faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle,faStar,faHeart,faPauseCircle,faPlayCircle,faWindowRestore } from "@fortawesome/fontawesome-free-regular";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { useRef,useEffect } from "react";
import dynamic from "next/dynamic";

export default function Home() {

  const MainPage = dynamic(() =>
  import('../components/main')
)

  const Music = faMusic as IconProp;
  const ChartLine = faChartLine as IconProp;
  const DotCircle = faDotCircle as IconProp;
  const Star = faStar as IconProp;
  const Plus  = faPlus as IconProp;
  const Heart  = faHeart as IconProp;
  const Random  = faRandom as IconProp;
  const StepBackward  = faStepBackward as IconProp;
  const StepForward  = faStepForward as IconProp;
  const Redo  = faRedo as IconProp;
  const PauseCircle  = faPauseCircle as IconProp;
  const PlayCircle  = faPlayCircle as IconProp;
  const MicrophoneAlt  = faMicrophoneAlt as IconProp;
  const VolumeUp  = faVolumeUp as IconProp;
  const WindowRestore  = faWindowRestore as IconProp;


  const option1 =[
    {
      icon:Music,
      name: 'Cá Nhân',
    },
    {
      icon:DotCircle,
      name: 'Khám Phá',
    },
    {
      icon:ChartLine,
      name: '#zingchart',
    },
    {
      icon:Music,
      name: 'Radio',
    },{
      icon:Music,
      name: 'Theo dõi',
    }
  ] ;

  const option2 =[
    {
      icon:Music,
      name: 'Nhạc Mới',
    },
    {
      icon:DotCircle,
      name: 'Thể Loại',
    },
    {
      icon:Star,
      name: 'Top 100',
    },
    {
      icon:Music,
      name: 'MV',
    }
  ] ;


  return (
    <>
      <Head>
        <title>MP3 | Nghe tải nhạc hay chất lượng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="flex">
        <section className="fixed bg-[#231b2e] text-white w-[240px] ">
          <div className="pt-[15px] pb-[16px] ">
            <div className="px-[28px]">
            <img src="logo-dark.svg" alt="" className="w-[120px] h-[40px]"></img>
            </div>
            <ul className=" relative py-[20px] after:absolute after:bg-[#ffffff1a] after:w-[192px] after:h-[0.5px] after:bottom-0 after:left-[24px]">
              {option1.map((option,index) =>(
                <li key={index}  className=" cursor-pointer  ">
                <Link href="/">
                  <a className=" px-[28px]  flex items-center py-[7px]  text-[13px] font-[700] text-[#dadada] focus:border-l-[3px] focus:border-[#7200a1] focus:bg-[#393243]">
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
          </div>
          <div className="max-h-[280px] overflow-y-auto ">
          <ul className=" pb-[20px]  ">
              {option2.map((option,index) =>(
                <li key={index}  className=" cursor-pointer  ">
                <Link href="/">
                  <a className=" px-[28px]  flex items-center py-[7px]  text-[13px] font-[700] text-[#dadada] focus:border-l-[3px] focus:border-[#7200a1] focus:bg-[#393243]">
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
          <div className="w-[200px] h-[105px] bg-[#7200a1] rounded-[8px] text-center mx-auto px-[15px] py-[8px] mb-[16px]  ">
            <p className="text-[13px] font-bold mb-[15px]">
            Đăng nhập để khám phá playlist dành riêng cho bạn
            </p>
            <span><Link href='/a'><a className="px-[35px] font-bold py-[6px] text-[13px] border-[1px] rounded-[16px] uppercase ">Đăng Nhập</a></Link></span>
          </div>
          <div className="w-[200px] h-[105px] bg-blue-pink rounded-[8px]  text-center mx-auto px-[15px] py-[8px] mb-[16px]  ">
            <p className="text-[13px] font-bold mb-[15px]">
            Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </p>
            <span><Link href='/a'><a className="px-[35px] font-bold py-[6px] text-[#000] text-[13px] bg-[#ffdb00] rounded-[16px] uppercase ">Nâng cấp vip</a></Link></span>
          </div>
          </div>
          <div className="border-t-[1px] border-[#ffffff1a] py-[16px]">
                <span className=" flex font-bold text-[14px] ml-[28px]">
                  <FontAwesomeIcon icon={Plus} className="w-[20px] h-[20px] mr-[8px]" />
                  Tạo playlist mới
                </span>
          </div>
          <div className="bg-[#120c1c] fixed h-[90px] w-[100%] bottom-0 flex px-[20px]">
                <div className="flex items-center w-[30%] ">
                  <img src="/image-music.webp" alt="" className="w-[64px] h-[64px] rounded-[4px] mr-[10px]"></img>
                  <div className="mr-[16px]">
                  <p className="text-[14px] leading-[20px] font-[600]">Closer</p>
                  <div className="flex text-[12px] text-[#FFFFFF80] leading-[16px]">
                    <p>The Chaninsmokers</p> 
                    <p>, Halsey</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                  <span><FontAwesomeIcon icon={Heart} className="w-[16px] h-[16px] mr-[20px]" /></span>
                  <span className="text-[24px] mt-[-12px]">...</span>
                  </div>
                </div>
                <div className="grow my-auto">
                <div className="flex items-center justify-center gap-[32px]">
                <span className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={Random} className="h-[20px] w-[20px] " /></span>
                <span className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={StepBackward} className="h-[20px] w-[20px] " /></span>
                <span className="hover:text-[#c662ef] cursor-pointer"><FontAwesomeIcon icon={PlayCircle} className="h-[48px] w-[48px] " /></span>
                <span className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={StepForward} className="h-[20px] w-[20px] " /></span>
                <span className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={Redo} className="h-[20px] w-[20px] " /></span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#7c7881] text-[12px] mr-[10px]">01:09</span>
                <input type="range" value="0" step="1" min="0" max="100" className="w-[500px] h-[2px] bg-[#5a5561] hover:h-[4px]  " />
                <span className="text-white text-[12px] ml-[10px]">04:06</span>
                </div>
                <div>
                </div>
                </div>
                <div className="w-[30%] flex items-center justify-center gap-[24px]">
                  <span><FontAwesomeIcon icon={MicrophoneAlt}  className="w-[20px] h-[20px]"/></span>
                  <span><FontAwesomeIcon icon={WindowRestore}  className="w-[20px] h-[20px]"/></span>
                  <div className="flex items-center">
                  <span><FontAwesomeIcon icon={VolumeUp}  className="w-[20px] h-[20px] mr-[8px]"/></span>
                  <input type="range" value="100" step="1" min="0" max="100" className="w-[75px] h-[2px] bg-[#5a5561] hover:h-[4px]  " />
                  </div>
                </div>
          </div>
        </section>
        <section className="flex-1 bg-[#170f23] ml-[240px]"> 
                <MainPage />
        </section>
      </div>
    </>
  );
}
