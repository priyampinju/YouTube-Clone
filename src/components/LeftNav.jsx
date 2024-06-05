import React, { useContext } from "react";
import { useNavigate } from "react-router";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/ContextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div className="xs:hidden sm:hidden md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all ">
      <div className="pl-5 font-semibold">Explore</div>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment>
              <LeftNavMenuItem
                text={item.type === "home" ? "home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.5]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-black/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-black/[0.2]" />
        <div className="text-black/[0.5] text-[14px]">
          Cloned with ♥ by Pinju
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
