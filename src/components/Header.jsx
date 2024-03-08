// import React, { useContext, useState } from "react";

// import ytLogoSvg from "../img/yt.svg";
// import ytLogo from "../img/yt-logo.png";
// import ytLogoMobile from "../img/yt-logo-mobile.png";

// import { SlMenu } from "react-icons/sl";
// import { CgClose } from "react-icons/cg";
// import { IoIosSearch } from "react-icons/io";
// import { RiVideoAddLine } from "react-icons/ri";
// import { FiBell } from "react-icons/fi";

// import { Context } from "../context/ContextApi";
// import Loader from "./shared/Loader";
// import { useLocation, useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { loading, mobileMenu, setMobileMenu } = useContext(Context);

//   const navigate = useNavigate();

//   const searchQueryHandler = (event) => {
//     if (
//       (event?.key === "Enter" || event === "serachButton") &&
//       searchQuery?.length > 0
//     ) {
//       navigate(`/searchResult/${searchQuery}`);
//     }
//   };

//   const mobileMenuToggle = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const { pathname } = useLocation();
//   const pagename = pathname?.split("/")?.filter(Boolean)?.[0];

//   return (
//     <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
//       {loading && <Loader />}
//       <div className="flex h-5 items-center">
//         {pagename !== "video" && (
//           <div
//             // className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
//             className="flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
//             onClick={mobileMenuToggle}
//           >
//             {mobileMenu ? (
//               <CgClose className="text-black text-xl" />
//             ) : (
//               <SlMenu className="text-black text-xl" />
//             )}
//           </div>
//         )}
//         <Link to="/" className="flex h-5 items-center">
//           <img src={ytLogoSvg} alt="logo" className="h-full dark:md:block" />
//           {/* <img src={ytLogoMobile} alt="youtube" className="h-full md:hidden" /> */}
//         </Link>

//         <div className="group flex items-center flex-shrink-1 flex-grow-0 flex-basis-732 ml-40">
//           <div className="flex items-center h-8 md:h-10 md:ml-10 md:pl-5 border border-[color:var(--grey-border)] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-15 md:group-focus-within:pl-10">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent outline-none text-color:[var(--searchbox-text)] pr-5 pl-10 md:pl-10 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyUp={searchQueryHandler}
//               value={searchQuery}
//             />
//           </div>
//           <button className="w-[40px] h-8 md:h-10 md:w-[60px] flex items-center justify-center border border-[color:var(--grey-border)] border-l-0 bg-[color:var(--searchbox-bg)] rounded-r-3xl group-focus-within:md:flex">
//             <IoIosSearch className="text-black text-xl cursor-pointer" />
//           </button>
//         </div>
//         <div className="flex items-center">
//           <div className="hidden md:flex">
//             <div
//               className="flex items-center justify-center h-10 w10
//                 rounded-full hover:bg-[#303030]/[0.6]"
//             >
//               <RiVideoAddLine className="text-black text-xl cursor-pointer" />
//             </div>
//             <div className="flex items-center justify-center h-10 w-[100px] rounded-full hover:bg-[#303030]/[0.6]">
//               <FiBell className="text-black text-xl cursor-pointer" />
//             </div>
//             <div className="h-8 w-8 overflow-hidden rounded-full md:ml-4 flex">
//               <img
//                 src="https://xsgames.co/randomusers/avatar.php?g=male"
//                 alt="profile"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

/*********************************************************************************************************** */

import React, { useContext, useState } from "react";

import ytLogoSvg from "../img/yt.svg";
import ytLogo from "../img/yt-logo.png";
import ytLogoMobile from "../img/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";

import { Context } from "../context/ContextApi";
import Loader from "./shared/Loader";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "serachButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pagename = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {" "}
        {/*  div1 for the menuu and logo */}
        {pagename !== "video" && (
          <div
            // className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            className="flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-black text-xl" />
            ) : (
              <SlMenu className="text-black text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img src={ytLogoSvg} alt="logo" className="h-full dark:md:block" />
          {/* <img src={ytLogoMobile} alt="youtube" className="h-full md:hidden" /> */}
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex items-center h-8 md:h-10 md:ml-10 md:pl-5 border border-[color:var(--grey-border)] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-15 md:group-focus-within:pl-10">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-color:[var(--searchbox-text)] pr-5 pl-10 md:pl-10 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="w-[40px] h-8 md:h-10 md:w-[60px] flex items-center justify-center border border-[color:var(--grey-border)] border-l-0 bg-[color:var(--searchbox-bg)] rounded-r-3xl group-focus-within:md:flex">
          <IoIosSearch className="text-black text-xl cursor-pointer" />
        </button>
        <div className="flex items-center justify-center h-10 w-10 ml-3 rounded-full hover:bg-[#303030]/[0.6]">
          <IoMdMic className="text-black text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div
            className="flex items-center justify-center h-10 w10
                rounded-full hover:bg-[#303030]/[0.6]"
          >
            <RiVideoAddLine className="text-black text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center h-10 w-[100px] rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-black text-xl cursor-pointer" />
          </div>
          <div className="h-8 w-8 overflow-hidden rounded-full md:ml-4 flex">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
