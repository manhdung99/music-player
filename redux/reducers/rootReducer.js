const initState = {
  songs: [
    {
      id: 1,
      name: "End of time",
      singer: "K-391,Alan Walker",
      path: "/mp3/End-of-Time-K-391-Alan-Walker-Ahrix.mp3",
      image: "/song-image/end-of-time.jpg",
      time: "03:07",
    },
    {
      id: 2,
      name: "Legends-Never-Die",
      singer: "Jeff Danna",
      path: "/mp3/Legends-Never-Die-Jeff-Danna-Mychael-Danna-Against-The-Current.mp3",
      image: "/song-image/legend-never-die.jpg",
      time: "03.55",
    },
    {
      id: 3,
      name: "Please-Don-t-Go",
      singer: "Joel-Adams",
      path: "/mp3/Please-Don-t-Go-Joel-Adams.mp3",
      image: "/song-image/please-dont-go.jpg",
      time: "03.30",
    },
    {
      id: 4,
      name: "See-You-Again",
      singer: "Wiz-Khalifa,Charlie-Puth",
      path: "/mp3/See-You-Again-Absence-Remix-Wiz-Khalifa-Charlie-Puth.mp3",
      image: "/song-image/see-you-again.jpg",
      time: "03.36",
    },
    {
      id: 5,
      name: "Cưới Thôi",
      singer: "Massew",
      path: "/mp3/CuoiThoi-MasiuMasew-7066112.mp3",
      image: "/song-image/cuoi-thoi.jpg",
      time: "03.08",
    },
    {
      id: 6,
      name: "Yêu Là Cưới",
      singer: "Phát Hồ,X2X",
      path: "/mp3/YeuLaCuoi-PhatHoX2X-7084519.mp3",
      image: "/song-image/yeu-la-cuoi.jpg",
      time: "02:59",
    },
  ],
  currentSong: {

  },
  currentIndex: 5,
  isPlay : false
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SONG":
      return {
        ...state,
        currentSong: {...action.payload },
      };
    case "SET_INDEX":
      return {
        ...state,
        currentIndex: action.payload,
      };
      case "SET_STATUS":
      return {
        ...state,
        isPlay: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
