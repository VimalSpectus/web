import React from "react";
import classes from "./AllCssStyle.module.css";

const About = () => {
  return (
    <div>
      <div className={classes.main_text}>
        Why We’re Here
        
      </div>

      <div className={classes.banners}>
        <h2>See What They're Saying About This Website</h2>
        <p>
        We support the ecosystem of people who provide services in the personal
        injury industry. <br /> We believe by powering them, we help the plaintiffs
        whom they serve to get a better deal from the justice system. <br />
         
          case was settled, but the law firm accidentally paid the wrong
          lienholder. If it wasn’t for Mighty, I <br /> may not have found out
          in time to recover. It’s an essential tool for lienholders.”
        </p>

        <p>
          Said Elshihabi, MD Legacy Brain & Spine (Medical Provider) Marietta,
          GA <br />
          "My #1 favorite thing about using Mighty is that it helps prevent
          cases from "slipping through the cracks.
          <br />" This provides a much faster turn around time for settling
          cases!" Sandy West
        </p>

        <p>
          "Mighty's law firm portal is a great resource for our company.  <br />I truly
          appreciate that they've figured a way to streamline <br /> our day-to-day
          processes and allow us to focus on the growth of our business."
        </p>
      </div>
    </div>
  );
};

export default About;
