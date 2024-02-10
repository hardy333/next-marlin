import React from 'react'
import classes from "./automate-section.module.css"

const AutomateSection = () => {
  return (
    <section className={`${classes.automate}`}>
        <div className={`container-small ${classes.automate__container}`}>
            <div className={`${classes.automate__text}`} >
                <h2><span className={classes["animated-text"]}>Auatomate</span> Your Work.</h2>
                <p>
                Marlin is the platform for Retailers and vendors, providing the speed and reliability innovators need to create at the moment of inspiration.
                </p>
            </div>
                {/* <button className={`${classes["animated-btn"]} `}>
                    <span className={classes["animated-btn__span-1"]} ></span>
                    <span className={classes["animated-btn__span-2"]} ></span>
                    <span className={classes["animated-btn__span-white"]} ></span>
                    
                    Try It Out</button> */}
                    <button className='btn btn--outline btn--big'>Try It out</button>
        </div>
    </section>
  )
}

export default AutomateSection