import connect from "@/assets/connect.png"
import optimize from "@/assets/optimize.png"
import analize from "@/assets/analize.png"
import SmallDotsSvg from '@/svgs/SmallDotsSvg'
import Image from "next/image"

const Features = ({bgColor=null}) => {
  return (
    <section className="features" style={{background: bgColor ?? ""}}>
        <SmallDotsSvg className="features-svg-small-dots-left"/>
        <SmallDotsSvg className="features-svg-small-dots-right"/>
        <div className="container-small features__container">
            <div className="feature-card" >
                    <div className="feature-card-circle" style={{background: bgColor ? "rgba(64, 106, 255, 0.09)        ": "white"}} data-aos="fade-down">
                        <Image className='feature-img' style={{width: "120%"}} src={connect} alt="" />
                    </div>
                    <p data-aos="fade-in" data-aos-delay="200"  data-aos-offset="0" >Connect</p>
            </div>
            <div className="feature-card">
                    <div className="feature-card-circle" style={{background: bgColor ? "rgba(64, 106, 255, 0.09)        ": "white"}} data-aos="fade-down">
                    <Image className='feature-img' src={optimize} alt="" />
                        
                    </div>
                    <p data-aos="fade-in" data-aos-delay="200" data-aos-offset="0" >Optimize</p>
            </div>
            <div className="feature-card">
                    <div className="feature-card-circle" style={{background: bgColor ? "rgba(64, 106, 255, 0.09)        ": "white"}} data-aos="fade-down">
                    <Image className='feature-img' src={analize} alt="" />

                    </div>
                    <p data-aos="fade-in" data-aos-delay="200"  data-aos-offset="0">Analyze</p>
            </div>
        </div>
    </section>
  )
}

export default Features