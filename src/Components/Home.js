import React from "react";
import classes from "./AllCssStyle.module.css";

const Home = () => {
  return (
    <div className={classes.main_div_home}>
      <div>
        <div className={classes.main_text}>
          Lorem Ipsum
          <br />
          simply dummy textss
        </div>
        <div className={classes.main_text_second}>
          Lorem Ipsum is simply dummy text of
        </div>
      </div>
      <div className={classes.banners}>
        <h2>See What They're Saying About This Website</h2>
        <p>
          See What They're Saying About Mighty “Mighty saved our practice
          thousands of dollars on one case alone. We got a notification that the <br/>
          case was settled, but the law firm accidentally paid the wrong
          lienholder. If it wasn’t for Mighty, I <br/> may not have found out in time
          to recover. It’s an essential tool for lienholders.”
        </p>
      </div>
    </div>
  );
};

export default Home;
