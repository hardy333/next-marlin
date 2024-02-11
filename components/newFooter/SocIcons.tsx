"use client";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
const SocIcons = ({ data }: { data: any }) => {
  return (
    <>
      <li
        style={{ display: data.icons.instagram.enable ? "flex" : "none" }}
        onClick={() => (window.location.href = data.icons.instagram.url)}
      >
        <FaInstagram />
      </li>
      <li
        style={{ display: data.icons.facebook.enable ? "flex" : "none" }}
        onClick={() => (window.location.href = data.icons.facebook.url)}
      >
        <FaFacebook />
      </li>
      <li
        style={{ display: data.icons.twitter.enable ? "flex" : "none" }}
        onClick={() => (window.location.href = data.icons.twitter.url)}
      >
        <FaTwitter />
      </li>
      <li
        style={{ display: data.icons.linkedin.enable ? "flex" : "none" }}
        onClick={() => (window.location.href = data.icons.linkedin.url)}
      >
        <FaLinkedin />
      </li>
    </>
  );
};

export default SocIcons;
