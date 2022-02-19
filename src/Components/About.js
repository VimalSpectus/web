import React from 'react'
import classes from  "./AllCssStyle.module.css"

const About = () => {
  return (
    <div>
               <div className={classes.main_text}>
              Lorem Ipsum
              <br />
              simply dummy text
            </div>
            
            <div className={classes.main_text_second}>
              Lorem Ipsum is simply dummy text of
            </div>
    </div>
  )
}

export default About