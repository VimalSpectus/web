import React from "react";
import classes from  "./AllCssStyle.module.css"


const SignIn = () => {
  return (

    <div className={classes.backg}>
        <p  className={classes.para_login}>Login</p>
    <div className={classes.sign_Div}>
      <input type="text" placeholder="Mobile" className={classes.inp}/>
      <input type="password" placeholder="Password" className={classes.inp}/>
    <button type="Submit" className={classes.btn_sign}>Submit</button>
   <div className={classes.flex_p_b}>
    <span className={classes.need_signup}>Need a Signup</span>
    
     <span> <button  className={classes.click_sign}>click here</button></span>
    </div>  
    </div></div>
  );
};

export default SignIn;
