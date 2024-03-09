import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

import trending from "../img/trending.svg";
import home from "../img/home.svg";
import shopping from "../img/shopping.svg";
import music from "../img/music.svg";
import movies from "../img/movies.svg";
import live from "../img/live.svg";
import gaming from "../img/gaming.svg";
import news from "../img/news.svg";
import sports from "../img/sports.svg";
import learning from "../img/learning.svg";
import fashion from "../img/fashion.svg";

export const categories = [
  { name: "New", icon: <img src={home} alt="home" />, type: "home" },
  {
    name: "Trending",
    icon: <img src={trending} alt="trend" />,
    type: "category",
  },
  { name: "Music", icon: <img src={music} alt="music" />, type: "category" },
  { name: "Films", icon: <img src={movies} alt="films" />, type: "category" },
  { name: "Live", icon: <img src={live} alt="live" />, type: "category" },
  { name: "Gaming", icon: <img src={gaming} alt="gaming" />, type: "category" },
  { name: "News", icon: <img src={news} alt="news" />, type: "category" },
  { name: "Sports", icon: <img src={sports} alt="sports" />, type: "category" },
  {
    name: "Learning",
    icon: <img src={learning} alt="learning" />,
    type: "category",
  },
  {
    name: "Fashion & beauty",
    icon: <img src={fashion} alt="fashion" />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
