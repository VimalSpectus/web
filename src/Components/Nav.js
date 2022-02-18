import React from 'react'
import {
    BrowserRouter as Router,Routes,
    Route,
    Link
  } from "react-router-dom";
  import Home from "./Home"
  import About from "./About"
  import Services from "./Services"
  import ContactUs from "./ContactUs";
  import classes from "./AllCssStyle.module.css"

const Nav = () => {
    return (

    
      <Router>
          <div className={classes.background_col}>
              <nav >
                  <ul className={classes.navigation_div}>
                      <li>
                          <Link to='/Home'  className={classes.col} >Home</Link>
                             {/* here we can replace a to Link and href to To */}
                      </li>
                      <li>
                          <Link to='/About'  className={classes.col}>About</Link>
                          {/* here we can replace a to Link and href to To */}
                      </li>

                      <li>
                          <Link to='/Services'  className={classes.col}>Services</Link>
                             {/* here we can replace a to Link and href to To */}
                      </li>
                      <li>
                          <Link to='/ContactUs'  className={classes.col}>ContactUs</Link>
                             {/* here we can replace a to Link and href to To */}
                      </li>

                  </ul>
              </nav>
  
                  {/* Now we can use Swich  mrthod */}
  
        <Routes>
          <Route path="/Home"   element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs"  element={<ContactUs />} />
          <Route path="/Services"   element={<Services/>} />
        </Routes>
  
              
  
          </div>
      </Router>
     
    );
  }
  export default Nav;