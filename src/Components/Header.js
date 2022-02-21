import React from "react";
import { Link } from "react-router-dom";
import classes from  "./AllCssStyle.module.css"



const Header = () => {
  return (
   
      <div className={classes.background_col}>
        <nav>
          <ul className={classes.navigation_div}>
          <li>
              <Link to="/Signln" className={classes.col}>
              SignIn
              </Link>
              {/* here we can replace a to Link and href to To */}
            </li>
            <li>
              <Link to="/Home" className={classes.col}>
                Home
              </Link>
              {/* here we can replace a to Link and href to To */}
            </li>
            <li>
              <Link to="/About" className={classes.col}>
                About
              </Link>
              {/* here we can replace a to Link and href to To */}
            </li>

            <li>
              <Link to="/Services" className={classes.col}>
                Services
              </Link>
              {/* here we can replace a to Link and href to To */}
            </li>
            <li  className={classes.sign_li}>
              <Link to="/ContactUs" className={classes.col}>
                Sign Up
              </Link>
              {/* here we can replace a to Link and href to To */}
            </li>
          </ul>
        </nav>

        {/* Now we can use Swich  mrthod */}

      
      </div>
   
  );
};
export default Header;
