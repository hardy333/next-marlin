import { ConnectSvg, OptimizeSvg, AnalyzeSvg } from "../FeatureSvgs";
import cn from "classnames";
import styles from "./features.module.css";
import Image from "next/image";
import { urlFor } from "@/app/_lib/sanity";

const initialData = [
  {
    img: <ConnectSvg />,
    h: "Connect",
    p: `Supposing so be resolving breakfast am or perfectly Lorem, ipsum..`,
    color: "#E6C539",
    bgColor: "rgba(230, 198, 57, 0.1)",
  },
  {
    img: <OptimizeSvg />,
    h: "Optimize",
    p: `Rapturous did believe him all had supported.`,
    color: "#30D9BD",
    bgColor: "rgba(48, 217, 189, 0.1)",
  },
  {
    img: <AnalyzeSvg />,
    h: "Analyze",
    p: `Arranging rapturous did believe him all had supported.`,
    color: "#F33347",
    bgColor: "rgba(243, 51, 70, 0.1)",
  },
];

export const revalidate = 0; // revalidate at most 30 seconds

const Features = async ({
  bgColor = null,
  data,
}: {
  bgColor: string | null;
  data: any;
}) => {
  let resData = null;

  if (data) {
    resData = initialData.map((initObj, index) => {
      if (index === 0) {
        return {
          ...initObj,
          h: data?.leftFeature.heading,
          p: data?.leftFeature.paragraph,
          // img: data?.leftFeature.image,
        };
      }
      if (index === 1) {
        return {
          ...initObj,
          h: data?.middleFeature.heading,
          p: data?.middleFeature.paragraph,
          // img: data?.middleFeature.image,
        };
      }
      if (index === 2) {
        return {
          ...initObj,
          h: data?.rightFeature.heading,
          p: data?.rightFeature.paragraph,
          // img: data?.rightFeature.image,
        };
      }
    });
  }

  return (
    <section
      className="features"
      style={{ background: "white", marginTop: "50px", marginBottom: "50px" }}
    >
      {/* <SmallDotsSvg className="features-svg-small-dots-right" /> */}
      <div className="container-small features__container">
        {resData?.map((obj: any, index: number) => {
          return (
            <article key={obj.h + index} className={cn(styles.featureCard)}>
              <div
                className={cn(styles.svgBox)}
                style={{ background: obj.bgColor, color: obj.color }}
              >
                {obj.img}
                {/* <Image
                  src={urlFor(obj.img).url()}
                  alt="img"
                  width={500}
                  height={500}
                /> */}
              </div>
              <h2>{obj.h}</h2>
              <p>{obj.p}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
