/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom,faStepBackward,faStepForward,faRedo,faMicrophoneAlt,faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart,faPauseCircle,faPlayCircle,faWindowRestore } from "@fortawesome/fontawesome-free-regular";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState,useEffect,useRef } from 'react';
export default function Media() {
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

    const randomButton = useRef(null)
    const repeatButton = useRef(null)
    const audioRef = useRef(null)
    const pauseButton = useRef(null)
    const playButton = useRef(null)
    const process = useRef(null)
    const [isPlay,setIsPlay] = useState(false)
    const [currentIndex,setCurrentIndex] = useState(0);
    const [currentValue,setCurrentValue] = useState(0);
    const [timeCurrent,setTimeCurrent] = useState(0);
    const [songTime,setSongTime] = useState(0);
    const [isRandom,setIsRandom] = useState(false);
    const [isRepeat,setIsRepeat] =useState(false);


    const [songs,setSongs] = useState([
        {
            name : 'End of time',
            singer: 'K-391,Alan Walker',
            path: '/mp3/End-of-Time-K-391-Alan-Walker-Ahrix.mp3',
            image: '/song-image/end-of-time.jpg'
        },
        {
            name : 'Legends-Never-Die',
            singer: 'Jeff Danna',
            path: '/mp3/Legends-Never-Die-Jeff-Danna-Mychael-Danna-Against-The-Current.mp3',
            image: '/song-image/legend-never-die.jpg'
        },
        {
            name : 'Please-Don-t-Go',
            singer: 'Joel-Adams',
            path: '/mp3/Please-Don-t-Go-Joel-Adams.mp3',
            image: '/song-image/please-dont-go.jpg'
        },
        {
            name : 'See-You-Again',
            singer: 'Wiz-Khalifa,Charlie-Puth',
            path: '/mp3/See-You-Again-Absence-Remix-Wiz-Khalifa-Charlie-Puth.mp3',
            image: '/song-image/see-you-again.jpg'
        },
        {
            name : 'Cưới Thôi',
            singer: 'Massew',
            path: '/mp3/CuoiThoi-MasiuMasew-7066112.mp3',
            image: '/song-image/cuoi-thoi.jpg'
        },
        {
            name : 'Yêu Là Cưới',
            singer: 'Phát Hồ,X2X',
            path: '/mp3/YeuLaCuoi-PhatHoX2X-7084519.mp3',
            image: '/song-image/yeu-la-cuoi.jpg'
        }
    ])

    const [currentSong,setCurrentSong] = useState(
    {
            name : 'End of time',
            singer: 'K-391,Alan Walker',
            path: '/mp3/End-of-Time-K-391-Alan-Walker-Ahrix.mp3',
            image: '/song-image/end-of-time.jpg'
    })
    useEffect(()=>{
        setSongTime(audioRef.current.duration)
        setTimeCurrent(audioRef.current.currentTime)
    })
    useEffect(()=>{
        setTimeout(() => {
            const data = songs[currentIndex];  
            setCurrentSong({...data});
            audioRef.current.play();
        }, 1);
    },[currentIndex])

    useEffect(()=>{   
        if(isPlay){
            playButton.current.style.display = "none"
            pauseButton.current.style.display = "block" 
        }else{
            playButton.current.style.display = "block"
            pauseButton.current.style.display = "none"
        }
    },[isPlay])

    useEffect(()=>{
        if(isRandom){
            randomButton.current.style.color = "#7200a1"
        }else{
            randomButton.current.style.color = "#fff"
        }
    },[isRandom])
    useEffect(()=>{
        if(isRepeat){
            repeatButton.current.style.color = "#7200a1"
        }else{
            repeatButton.current.style.color = "#fff"
        }
    },[isRepeat])
    const handlePlay = () =>{
        if(isPlay === false){
            audioRef.current.play();      
            setIsPlay(true);  
        }else{
            audioRef.current.pause();
            setIsPlay(false); 
        }
    }
    const handleNext = () =>{
        if(isRandom){
            handleRandom();
        }else{
            if(currentIndex === songs.length-1){
                setCurrentIndex(0);
            }else{
                setCurrentIndex(currentIndex => currentIndex+1)
            }
        }
        setIsPlay(true)
    }
    const handlePrev= () =>{
        if(isRandom){
            handleRandom();
        }else{
            if(currentIndex === 0){
                setCurrentIndex(songs.length-1)
            }else{
                setCurrentIndex(currentIndex => currentIndex-1)
            }
        }
        setIsPlay(true)
    }
    const handleRandom = () =>{
        let newIndex ;
        newIndex = Math.floor(Math.random() * songs.length);
        setCurrentIndex(newIndex);
    }
     const handleUpdateTime = () =>{       
        const processPercent = isNaN(audioRef.current.duration) ? 0 : (audioRef.current.currentTime/audioRef.current.duration*100);
        setCurrentValue(processPercent);
     }

     const handleChangeTime = (e) =>{
        const seekTime = e.target.value * audioRef.current.duration /100;
        audioRef.current.currentTime = seekTime;
         setCurrentValue(e.target.value);    
     }

     const handleEnded = () =>{
        if(isRepeat){
            audioRef.current.play();
        }else{
            handleNext()
        }
     }
    return (
        <div className="bg-[#120c1c] fixed h-[90px] w-[100%] bottom-0 flex px-[20px] text-white">
        <div className="flex items-center w-[30%] ">
          <img src={currentSong.image} alt="" className="w-[64px] h-[64px] rounded-[4px] mr-[10px]"></img>
          <div className="mr-[16px]">
          <p className="text-[14px] leading-[20px] font-[600]">{currentSong.name}</p>
          <div className="flex text-[12px] text-[#FFFFFF80] leading-[16px]">
            <p>{currentSong.singer}</p> 
            </div>
          </div>
          <div className="flex items-center">
          <span><FontAwesomeIcon icon={Heart} className="w-[16px] h-[16px] mr-[20px]" /></span>
          <span className="text-[24px] mt-[-12px]">...</span>
          </div>
        </div>
        <div className="grow my-auto">
        <div className="flex items-center justify-center gap-[32px]">
        <span onClick={()=>setIsRandom(!isRandom)} ref={randomButton} className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={Random} className="icon-20 " /></span>
        <span onClick={()=>handlePrev()} className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={StepBackward} className="icon-20 " /></span>
        <span ref={playButton} onClick={()=>handlePlay()} className="hover:text-[#c662ef] cursor-pointer"><FontAwesomeIcon icon={PlayCircle} className="icon-48 " /></span>
        <span ref={pauseButton} onClick={()=>handlePlay()} className="hover:text-[#c662ef] cursor-pointer hidden"><FontAwesomeIcon icon={PauseCircle} className="icon-48 " /></span>
        <span onClick={()=>handleNext()} className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={StepForward} className="icon-20 " /></span>
        <span onClick={()=>setIsRepeat(!isRepeat)} ref={repeatButton} className="p-[5px] bg-gray-[#120c1c] cursor-pointer rounded-[50%] hover:bg-gray-800"><FontAwesomeIcon icon={Redo} className="icon-20 " /></span>
        </div>
        <div className="flex items-center">
          <span className="text-[#7c7881] text-[12px] mr-[4px] w-[24px] h-[18px]">{Math.floor(timeCurrent/60)}:{Math.floor(timeCurrent%60)}</span>
        <input ref={process} type="range" value={currentValue}
        onChange={(e)=>{handleChangeTime(e)}}  step="1" min="0" max="100" className="w-[500px] h-[2px] bg-[#5a5561] hover:h-[4px]   " />
        <span className="text-white text-[12px] ml-[8px] w-[24px] h-[18px]">{Math.floor(songTime/60)}:{Math.floor(songTime%60)}</span>
        </div>
        <div>
        </div>
        </div>
        <div className="w-[30%] flex items-center justify-center gap-[24px]">
          <span><FontAwesomeIcon icon={MicrophoneAlt}  className="w-[20px] h-[20px]"/></span>
          <span><FontAwesomeIcon icon={WindowRestore}  className="w-[20px] h-[20px]"/></span>
          <div className="flex items-center">
          <span><FontAwesomeIcon icon={VolumeUp}  className="w-[20px] h-[20px] mr-[8px]"/></span>
          <input type="range" step="1" min="0" max="100" className="w-[75px] h-[2px] bg-[#5a5561] hover:h-[4px]  " />
          </div>
          <audio onEnded={()=>handleEnded()} onTimeUpdate={handleUpdateTime} ref={audioRef}  src={currentSong.path}/>
        </div>
  </div>
    )
}
