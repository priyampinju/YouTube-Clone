import React, { useContext, useState } from "react";

import ytLogoSvg from "../img/yt.svg";
import ytLogo from "../img/yt-logo.png";
import ytLogoMobile from "../img/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";

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
          <img src={ytLogoSvg} alt="logo" className="h-7 dark:md:block " />
          <img src={ytLogoMobile} alt="youtube" className="h-full md:hidden" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
