import React from "react";

const Hero = () => {
  return (
    <section className="for-retailers-hero">
      <div className="container-small for-retailers-hero__container flex-container">
        <div>
          <h1 data-aos="fade-down" data-aos-delay={400}>
         
            See all your vendors here and <br /> bla bla bla lorem upsum
          </h1>
          <button className="btn btn--big" data-aos="fade-up" data-aos-delay={400}>
            Test Demo
          </button>

        </div>

        <div className="box-container">
          <div
            className="box hero-box"
            data-aos="fade-left"
            data-aos-delay={400}
          >
            {/* <img src={p1} className='hero-img' alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
