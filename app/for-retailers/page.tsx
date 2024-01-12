import ForRetailersHero from './Hero';
import ForRetailersMiddleSections from './MiddleSections';

// css
import "./for-retailers.css"
import Features from '@/components/Features';

const ForRetailers = () => {
  
  return (
    <>
    <ForRetailersHero />
    <Features bgColor="white"/>
    <ForRetailersMiddleSections />
    <section className="simple-cta-section">
      <button className="btn">Book a call</button>
    </section>
    </>
  )
}

export default ForRetailers