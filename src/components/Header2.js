import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
  return (
      <div className = "header-wrapper" id = "homescroll">
        <div className = "main-info">
            <h1 className = "intro">
               DESIGN AND DEVELOPMENT
            </h1>
            <Typed 
                className=" typed-text"
                strings = {["Pooja Govindasami"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Link to = "contactscroll"  className = 'btn-main-offer' smooth = {true} duration = {2000}> Contact Me </Link>
        </div>

      </div>
  )
};

export default Header;
