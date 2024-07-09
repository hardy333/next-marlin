import cn from "classnames";
import styles from "./newFooter.module.css";

import MarlinLogoSvg from "@/svgs/MarlinLogoSvg";
import { client } from "@/app/_lib/sanity";
import { getLang } from "@/app/_utils/getLang";
import SocIcons from "./SocIcons";
import Link from "next/link";

export const revalidate = 0; // revalidate at most 30 seconds

async function getData(lang: string) {
  const query = `
  *[_type == "footer"] | order(_createdAt desc){
      icons,
      "paragraph" : paragraph["${lang}"],
      "subParagraph" : subParagraph["${lang}"],
      list1,
      list2,
      list3,

  }[0]


    `;

  const data = await client.fetch(query);

  return data;
}

const NewFooter = async (params: any) => {
  const lang = getLang();
  const data = await getData(lang);

  console.log(data.list1);

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
            <p>{data.paragraph}</p>
          </div>
          <section className={cn(styles.listsContainer)}>
            {/* 1 */}
            {data.list1?.links ? (
              <div className={cn(styles.mainList)}>
                <h2>{data.list1.heading[lang]}</h2>
                <ul>
                  {data.list1.links?.map((link: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={link.url}>{link.name[lang]}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            {/* 2 */}
            {data.list2.links && (
              <div className={cn(styles.mainList)}>
                <h2>{data.list2.heading[lang]}</h2>
                <ul>
                  {data.list2.links?.map((link: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={link.url}>{link.name[lang]}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* 3 */}
            {data.list3.links && (
              <div className={cn(styles.mainList)}>
                <h2>{data.list3.heading[lang]}</h2>
                <ul>
                  {data.list3.links?.map((link: any, index: number) => {
                    return (
                      <li key={index}>
                        <Link href={link.url}>{link.name[lang]}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* 2 */}
            {/* <div className={cn(styles.mainList)}>
              <h2>მარლინის შესახებ</h2>
              <ul>
                <li>ჩვენს შესახებ</li>
                <li>წესები და პირობები</li>
                <li>კონტაქტი</li>
              </ul>
            </div> */}

            {/* 3 */}
            {/* 
            <div className={cn(styles.mainList)}>
              <h2>ვისთვის არის</h2>
              <ul>
                <li>მომწოდებლებისთვის</li>
                <li>რითეილერებისთვის</li>
                <li>მენეჯერებისთვის</li>
                <li>ბუღალტრებისთვის</li>
              </ul>
            </div> */}
          </section>
        </section>
        <section className={cn(styles.footerBottom)}>
          <p>{data.subParagraph}</p>
          <ul className={cn(styles.icons)}>
            <SocIcons data={data} />
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default NewFooter;
