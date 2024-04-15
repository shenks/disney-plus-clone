import React from "react";
import logo from "./../assets/Images/logo.png";
import profile from "./../assets/Images/profile.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px]" />
        {menu.map((item) => (
          <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img src={profile} className="w-[40px]" />
    </div>
  );
}

export default Header;
