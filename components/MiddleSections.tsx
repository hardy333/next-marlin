import React from "react";
import ill2 from "@/assets/ill2.png";
import ill3 from "@/assets/ill3.png";
import ill4 from "@/assets/ill4.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";


const MiddleSections = () => {

  return (
    <>
      {/* 1 */}
      <section className="middle-section " id="what-is-marlin">
        <div className="container-small flex-container middle-section__container">
          <div data-aos="fade-right">
            <h2>What is Marlin?</h2>
            <p>
              Marlin is a digital platform that connects FMCG retailers to their
              vendors and helps them manage orders, order statuses, product
              catalogs, available stocks, special offers and much more, in a
              single space.
            </p>
            <p>
              Last but not least, Marlin provides a single view of Service Level
              Analytics for both businesses so that they can actually use it.
            </p>
          </div>
          <div className="box-container" data-aos="fade-left">
            <div
              className="box"
              style={{ width: "550xpx", position: "relative" }}
            >
              <Image
                style={{ width: "100%" }}
                src={ill2}
                className="hero-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section className="middle-section">
        <div
          className="container-small flex-container middle-section__container
        flex-container--reverse
        
        
        "
        >
          <div data-aos="fade-left">
            <h2>Who it’s for?</h2>
            <p>
              If you are FMCG Retailer with dozens of markets or if you are FMCG
              distributor servicing chain retailers, Marlin is here for your
              rescue. Manage relationships more efficiently, way faster.
            </p>
          </div>
          <div className="box-container" data-aos="fade-right">
            <div
              className="box"
              style={{ width: "550px", position: "relative" }}
            >
              <Image
                style={{ width: "100%" }}
                src={ill3}
                className="hero-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="middle-section  how-it-works">
        <div
          className="container-small flex-container middle-section__container
       
        
        
        "
        >
          <div data-aos="fade-right">
            <h2>How it works?</h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay={300}>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top" data-aos-off="fade-in">
                    Smooth integration
                  </p>
                  <p className="bottom" data-aos-off="fade-in">
                    Arranging rapturous did believe him all had supported. 24
                    Hours Alert Rapturous did believe him all had supported.
                  </p>
                </div>
              </li>
              <li data-aos="fade-left" data-aos-delay={300}>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top" data-aos-off="fade-in">
                    Fast Development
                  </p>
                  <p className="bottom" data-aos-off="fade-in">
                    Supposing so be resolving breakfast am or perfectly. Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </li>
              <li data-aos="fade-right" data-aos-delay={300}>
                <span
                  className={`w-[25px] h-[25px] rounded-full  flex items-center justify-center bg-[#549ef255] mt-1`}
                >
                  <FaCheck size={10} fill={"hsl(212, 86%, 64%)"} />
                </span>
                <div className="p-container">
                  <p className="top" data-aos-off="fade-in">
                    Quick Services
                  </p>
                  <p className="bottom" data-aos-off="fade-in">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-container" data-aos="fade-left">
            <div
              className="box"
              style={{ width: "550px", height: "600px", position: "relative" }}
            >
              <Image
                style={{ width: "100%" }}
                src={ill4}
                className="hero-img"
                alt=""
              />
            </div>
          </div>
        </div>

        <div style={{ background: "" }}></div>
      </section>
    </>
  );
};

export default MiddleSections;
