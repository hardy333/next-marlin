"use client";

import React from "react";
import { BsChatDots } from "react-icons/bs";

import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({ subsets: ["latin"] });

import styles from "./formSection.module.css";
import { IoMdChatbubbles } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi";

const formSectionTexts = [
  {
    title: "Technical support",
    description:
      "Found a persistent bug, or need help setting a new team member up? Can’t crack a feature? Let us know!",
  },
  {
    title: "General chat",
    description:
      "Billing issues, customizations, plan changes--anything that doesn’t fit in the other two brackets, goes here. Start Chat",
  },
  {
    title: "Help Center",
    description:
      "Want to share feedback on an existing feature or suggest a new one? Talk to us! Visit Help Center",
  },
];

// https://3dbdc4e02c174de9882917a6978be3f0.svc.dynamics.com/f/formpage/5e0ab75f-24b9-ee11-a569-000d3ad7f2e0/correlation/GvIjSbXYgAVO_fupgNHHEn_PfYpnM3UVyF-A278wImY

const FormSection = () => {
    const handleSubmit =  async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("firstName", "Albert");
        formData.append("lastname", "Ainshtain");
      
      
        formData.append("email", "albert123@gmail.com");

        console.log(formData)
        console.log(formData.get("email"))
      
        const response = await fetch("https://3dbdc4e02c174de9882917a6978be3f0.svc.dynamics.com/f/formpage/5e0ab75f-24b9-ee11-a569-000d3ad7f2e0/correlation/GvIjSbXYgAVO_fupgNHHEn_PfYpnM3UVyF-A278wImY", {
          method: "POST",
          body: formData,
        });

        const res = await response.json()
        console.log("res", res)
    }
    
    
  return (
    <>
      <div className={`${public_sans.className} ${styles.container}`}>
        <form onSubmit={ handleSubmit} className={styles.left}>
          {/* 1 */}
          <div className={styles.topInputs}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName"/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName"/>
            </div>
          </div>
          {/* 2 */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  id="email"/>
          </div>
          {/* 3 */}
          <div className={styles.inputGroup}>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" id="companyName"/>
          </div>
          {/* 4 */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">phone</label>
            <input type="number" name="phone" id="phone"/>
          </div>
          {/* 5 */}
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <input type="textarea"  name="message" id="message"/>
          </div>
          <button type="submit" role="button" className={styles.btn} >Send</button>
        </form>

        <div className={styles.right}>
          {formSectionTexts.map((obj, i) => {
            return (
              <article key={obj.title} className={styles.article}>
                <div className={styles.articleImgBox}>
                  {i === 0 ? <BsChatDots /> : null}
                  {i === 1 ? <IoMdChatbubbles /> : null}
                  {i === 2 ? <HiOutlineMicrophone /> : null}
                </div>
                <h2 className={styles.articleTitle}>{obj.title}</h2>
                <p className={styles.articleP}>{obj.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FormSection;
