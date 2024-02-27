"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarBurgerBtnInside = () => {
  return (
    <button
      className="navbar-toggle-btn-inside"
      onClick={() => {
        document.querySelector(".navbar")?.classList.remove("open-content");
      }}
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default NavbarBurgerBtnInside;
