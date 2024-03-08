import React, { useContext, useState } from "react";

import ytLogoSvg from "../img/yt.svg";
import ytLogo from "../img/yt-logo.png";
import ytLogoMobile from "../img/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";

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
        {pagename !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img src={ytLogoSvg} alt="logo" className="h-full dark:md:block" />
          {/* <img src={ytLogoMobile} alt="youtube" className="h-full md:hidden" /> */}
        </Link>

        <div className="group flex items-center flex-shrink-1 flex-grow-0 flex-basis-732">
          <div
            className="flex i
          
          
          
          tems-center h-8 md:h-10 md:ml-10 md:pl-5 border border-[color:var(--grey-border)] rounded-l-3xl border-r-0 group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0"
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-color:[var(--searchbox-text)] pr-5 pl-10 md:pl-10 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <div className="w-10 h-8 md:h-10 flex items-center justify-center border border-[color:var(--grey-border)] bg-[color:var(--searchbox-bg)] rounded-r-3xl group-focus-within:md:flex">
            <IoIosSearch className="text-black text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
