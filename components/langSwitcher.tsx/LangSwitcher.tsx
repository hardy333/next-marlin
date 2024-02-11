"use client";
import { useLanguageContext } from "@/app/context/languageContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

//css
import "./style.css";
import { IoIosArrowDown } from "react-icons/io";

const LangSwitcher = () => {
  const { lang, setLang } = useLanguageContext();

  return (
    // <div
    //   onClick={() => {
    //     setLang((currLang) => {
    //       if (currLang === "en") {
    //         return "geo";
    //       } else {
    //         return "en";
    //       }
    //     });

    //     window.location.reload();
    //   }}
    // >
    //   {lang}
    // </div>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <span style={{ textTransform: "capitalize" }}>{lang}</span>
          <IoIosArrowDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={7}>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              if (lang === "en") return;
              setLang(() => "en");
              setTimeout(() => {
                window.location.reload();
              }, 0);
            }}
          >
            En
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={() => {
              if (lang === "geo") return;
              setLang(() => "geo");

              setTimeout(() => {
                window.location.reload();
              }, 0);
            }}
          >
            Geo
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default LangSwitcher;
