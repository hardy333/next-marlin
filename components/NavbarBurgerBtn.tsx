"use client";

import { RxHamburgerMenu } from "react-icons/rx";

const NavbarBurgerBtn = () => {
  const handleContentOpen = () => {
    document.querySelector(".navbar")?.classList.add("open-content");
    console.log("111");
  };
  return (
    <button className="navbar-toggle-btn" onClick={handleContentOpen}>
      <RxHamburgerMenu />
    </button>
  );
};

export default NavbarBurgerBtn;
