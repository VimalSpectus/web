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
         <img className={classes.banner_img} src="photo-1446057032654-9d8885db76c6.jpg"/>
         </div>
        
    </div>
  );
};

export default Home;
