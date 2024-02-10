"use client";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import cn from "classnames";
import styles from "./newFooter.module.css";

import MarlinLogoSvg from "@/svgs/MarlinLogoSvg";

const NewFooter = () => {
  // const isBigFooter =

  return (
    <footer className={cn(styles.footer)}>
      <div className={cn(styles.container)}>
        <section className={cn(styles.footerTop)}>
          <div className={cn(styles.leftSection)}>
            <h2 className="flex items-center gap-5 mb-5">
              <span className="">
                <MarlinLogoSvg />{" "}
              </span>
              <span>Marlin</span>
            </h2>
            <p>
              Build faster websites with Block multipurpose bootstrap 5
              template. Duis imper diet mollis leo, quis ultrices erat ultrices
              simple dummy .
            </p>
            {/* <form className={cn(styles.footerForm)}>
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </form> */}
          </div>
          {/* 1 */}
          <section className={cn(styles.listsContainer)}>
            <div className={cn(styles.mainList)}>
              <h2>დამხმარე ბმულები</h2>
              <ul>
                <li>ბლოგი</li>
                <li>FAQ/დახმარება</li>
                <li>რეპორტინგი</li>
                <li>ქლაუდი</li>
                <li>სასწავლო მასალები</li>
              </ul>
            </div>
            {/* 2 */}
            <div className={cn(styles.mainList)}>
              <h2>მარლინის შესახებ</h2>
              <ul>
                <li>ჩვენს შესახებ</li>
                <li>წესები და პირობები</li>
                <li>კონტაქტი</li>
              </ul>
            </div>

            {/* 3 */}

            <div className={cn(styles.mainList)}>
              <h2>ვისთვის არის</h2>
              <ul>
                <li>მომწოდებლებისთვის</li>
                <li>რითეილერებისთვის</li>
                <li>მენეჯერებისთვის</li>
                <li>ბუღალტრებისთვის</li>
              </ul>
            </div>
          </section>
        </section>
        <section className={cn(styles.footerBottom)}>
          <p>
            Copyright © 2024 <span style={{ color: "#5f0ad5" }}> Marlin</span> |
            By Marlin team
          </p>
          <ul className={cn(styles.icons)}>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              {/* <CiLinkedin /> */}
              {/* <RiLinkedinBoxLine /> */}
              <FaLinkedin />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default NewFooter;
