"use clinet";

import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage({ src }: { src: any }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt=""
      src={src}
      width={500}
      height={500}
      // className={cn(
      //   `duration-700 ease-in-out group-hover:opacity-75 cursor-pointer ${
      //     isLoading ? "" : "duration-300 hover:scale-x-105 hover:scale-y-105"
      //   }`,
      //   isLoading
      //     ? "scale-110 blur-2xl grayscale"
      //     : "scale-100 blur-0 grayscale-0"
      // )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;
