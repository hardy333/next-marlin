import SmallDotsSvg from "@/svgs/SmallDotsSvg";
import { ConnectSvg, OptimizeSvg, AnalyzeSvg } from "./FeatureSvgs";
import cn from "classnames";
import styles from "./features.module.css";

const data = [
  {
    img: <ConnectSvg />,
    h: "Connect",
    p: `
    Supposing so be resolving breakfast am or perfectly.`,
    color: "rgb(12, 188, 135)",
    bgColor: "rgba(12, 188, 135, 0.1)",
  },
  {
    img: <OptimizeSvg />,
    h: "Optimize",
    p: `Rapturous did believe him all had supported.`,
    bgColor: "rgba(253, 126, 20, 0.1)",
    color: "rgb(253, 126, 20)",
  },
  {
    img: <AnalyzeSvg />,
    h: "Analyze",
    p: `Arranging rapturous did believe him all had supported.`,
    color: "rgb(23, 162, 184)",
    bgColor: "rgba(23, 162, 184, 0.1)"
  },
];

const Features = ({ bgColor = null }: { bgColor: string | null }) => {
  return (
    <section className="features" style={{ background: bgColor ?? "" }}>
      <SmallDotsSvg className="features-svg-small-dots-right" />
      <div className="container-small features__container">
        {data?.map((obj) => {
          return (
            <article className={cn(styles.featureCard)}>
              <div className={cn(styles.svgBox)} style={{background: obj.bgColor, color: obj.color}}>{obj.img}</div>
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
