import clock from "@/assets/clock.png";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const Trends = () => {
  return (
    <section className="trends">
      <div className="container-small trends-container">
        <h3>Take a dive into industry trends</h3>
        <div className="trends-card-container">
          {/* 1 */}
          <article
            className="trend-card"
            data-aos-delay={200}
            data-aos="fade-in"
          >
            <span className="trend-card__lable">Industry news</span>
            <div className="trend-card__img"></div>
            <h4>Title Lorem Ipsum Lorem</h4>
            <p>
              Body text lorem upsum lorem upsum lorem upsum lorem upsum lorem
              upsum lorem upsum lorem upsum lorem upsum lorem
            </p>
            <p className="trend-card__read-more">
              Read more <BsArrowRightShort />{" "}
            </p>
            <footer>
              <span>
                {" "}
                <Image src={clock} alt="" /> 3 min
              </span>
              <span>September 9, 2023</span>
            </footer>
          </article>
          {/* 2 */}
          <article
            className="trend-card"
            data-aos-delay={400}
            data-aos="fade-in"
          >
            <span className="trend-card__lable">Industry news</span>
            <div className="trend-card__img"></div>
            <h4>Title Lorem Ipsum Lorem</h4>
            <p>
              Body text lorem upsum lorem upsum lorem upsum lorem upsum lorem
              upsum lorem upsum lorem upsum lorem upsum lorem
            </p>
            <p className="trend-card__read-more">
              Read more <BsArrowRightShort />
            </p>
            <footer>
              <span>
                {" "}
                <Image src={clock} alt="" />3 min
              </span>
              <span>September 9, 2023</span>
            </footer>
          </article>
          {/* 3 */}
          <article
            className="trend-card"
            data-aos-delay={600}
            data-aos="fade-in"
          >
            <span className="trend-card__lable">Industry news</span>
            <div className="trend-card__img"></div>
            <h4>Title Lorem Ipsum Lorem</h4>
            <p>
              Body text lorem upsum lorem upsum lorem upsum lorem upsum lorem
              upsum lorem upsum lorem upsum lorem upsum lorem
            </p>
            <p className="trend-card__read-more">
              Read more <BsArrowRightShort />{" "}
            </p>
            <footer>
              <span>
                {" "}
                <Image src={clock} alt="" />3 min
              </span>
              <span>September 9, 2023</span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Trends;
