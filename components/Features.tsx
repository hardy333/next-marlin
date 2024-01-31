import SmallDotsSvg from "@/svgs/SmallDotsSvg";
import { ConnectSvg, OptimizeSvg, AnalyzeSvg } from "./FeatureSvgs";
import cn from "classnames";
import styles from "./features.module.css";
import { client } from "@/app/_lib/sanity";

const initialData = [
  {
    img: <ConnectSvg />,
    h: "Connect",
    p: `Supposing so be resolving breakfast am or perfectly Lorem, ipsum..`,
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
    bgColor: "rgba(23, 162, 184, 0.1)",
  },
];

export const revalidate = 0; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == "features"] | order(_createdAt desc){
      leftFeature,
        middleFeature,
        rightFeature
     }[0]
    
    `;
  const data = await client.fetch(query);

  return data;
}

const Features = async ({ bgColor = null }: { bgColor: string | null }) => {

  let data = await getData();

  let resData = null

  if(data){
    resData = initialData.map(((initObj, index) => {
      if(index === 0){
        return {
          ...initObj,
          h:data?.leftFeature.heading,
          p:data?.leftFeature.paragraph,
        }
      }
      if(index === 1){
        return {
          ...initObj,
          h: data?.middleFeature.heading,
          p: data?.middleFeature.paragraph,
        }
      }
      if(index === 2){
        return {
          ...initObj,
          h: data?.rightFeature.heading,
          p: data?.rightFeature.paragraph
        }
      }
    }))
  }


  return (
    <section
      className="features"
      style={{ background: "white", marginTop: "50px", marginBottom: "50px" }}
    >
      <SmallDotsSvg className="features-svg-small-dots-right" />
      <div className="container-small features__container">
        {resData?.map((obj:any) => {
          return (
            <article key={obj.h} className={cn(styles.featureCard)}>
              <div
                className={cn(styles.svgBox)}
                style={{ background: obj.bgColor, color: obj.color }}
              >
                {obj.img}
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
