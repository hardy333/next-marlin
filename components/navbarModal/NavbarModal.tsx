import React from "react";
import BaseModal from "../baseModal/BaseModal";
// import { linksArr } from "../Navbar";
import Link from "next/link";
import LangSwitcher from "../langSwitcher.tsx/LangSwitcher";

const NavbarModal = ({ linksArr, lang }: { linksArr: any; lang: string }) => {
  return (
    <BaseModal>
      <div className="navbar_content">
        <ul className="navbar__list" style={{ paddingRight: "45px" }}>
          {linksArr.map((link: any, index: number) => {
            return (
              <li key={link.link + index}>
                <Link prefetch={true} href={link.link}>
                  {link.text[lang]}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4 items-center navbar__btns-container">
          <LangSwitcher />
          {/* <ModalOpenBtnWrapper>
              <button className="btn btn--outline">{data.btnText}</button>
            </ModalOpenBtnWrapper> */}
        </div>
      </div>
    </BaseModal>
  );
};

export default NavbarModal;
