import { BsArrowRightShort } from "react-icons/bs";
import clock from "@/assets/clock.png";
import Image from "next/image";

const BigBlogPost = () => {
  return (
    <article className="big-blog-post">
      <div className="big-blog-post__img-container"></div>
      <div className="big-blog-post__content">
        <span className="trend-card__lable">Industry news</span>
        <h2>Lorem ipsum dolor sit.</h2>
        <p className="big-blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti debitis neque, ipsam aut nisi recusandae voluptatum suscipit, reprehenderit, officia magnam magni ea? Exercitationem laboriosam corporis quas ipsa temporibus quos.
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
      </div>
    </article>
  );
};

export default BigBlogPost;
