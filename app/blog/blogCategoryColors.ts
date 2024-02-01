import { isKeyObject } from "util/types";

export const blogCategoryColors = {
  "Good to know": "red",
  "Success cases": "red",
  "Tech and more": "red",
  "Industry news": "red",
};

const colors = [
  "#cce6ce",
  "#cff4fc",
  "#fff3cd",
  "#f8d0d7",
  "#9eeaf9",
  "#ffe69c",
];

export const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
