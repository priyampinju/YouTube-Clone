import React, { useContext } from "react";
import { useNavigate } from "react-router";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/ContextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all ">
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment>
              <LeftNavMenuItem
                text={item.type === "home" ? "home" : item.name}
                icon={item.icon}
                action={() => {}}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.5]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-black/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-black/[0.2]" />
        <div className="text-black/[0.2] text-[12px]">Clone by Pinju</div>
      </div>
    </div>
  );
};

export default LeftNav;
