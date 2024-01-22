"use clinet";

import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage({ src }: { src: any }) {
  const [isLoading, setLoading] = useState(true);

  return (
    //   <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 border-2 border-purple-400">
        <Image
          alt=""
          src={src}
          layout="fill"
          objectFit="cover"
          style={{
            borderRadius: "inherit",
          }}
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
    //   </div>
  );
}


export default BlurImage