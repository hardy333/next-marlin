"use client";
import styles from "./formSection.module.css";
import Image from "next/image";
import { urlFor } from "@/app/_lib/sanity";

type Props = {
  title: string;
  image: object;
};

const FormSection = ({ title, image }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", "Albert");
    formData.append("lastname", "Ainshtain");

    formData.append("email", "albert123@gmail.com");

    const response = await fetch(
      "https://3dbdc4e02c174de9882917a6978be3f0.svc.dynamics.com/f/formpage/5e0ab75f-24b9-ee11-a569-000d3ad7f2e0/correlation/GvIjSbXYgAVO_fupgNHHEn_PfYpnM3UVyF-A278wImY",
      {
        method: "POST",
        body: formData,
      }
    );

    const res = await response.json();
    console.log("res", res);
  };

  return (
    <>
      <div className={` ${styles.container}`}>
        <div
          className={`${styles.right} w-[50%] flex items-center justify-center`}
        >
          <Image
            width={1000}
            height={800}
            src={urlFor(image).url()}
            alt="placeholder illustration"
          />
        </div>

        <form
          className={`${styles.left} w-[50%] border-l border-l-[rgb(116, 117, 121)] p-[15px] pl-16 `}
        >
          {/* 1 */}
          <h2 className="text-[30px] font-bold mb-14">{title}</h2>
          <div className={styles.topInputs}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>
          {/* 2 */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          {/* 3 */}
          <div className={styles.inputGroup}>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" id="companyName" />
          </div>
          {/* 4 */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">phone</label>
            <input type="number" name="phone" id="phone" />
          </div>
          {/* 5 */}
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <input type="textarea" name="message" id="message" />
          </div>
          <button type="submit" role="button" className={styles.btn}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default FormSection;
