import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../config/menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faHouse } from "@fortawesome/free-solid-svg-icons";
const DisplayHeader = () => {
   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
   const onDropDownButtonClicked = () => {
      setIsSideBarOpen((prev) => !prev);
   };
   const content = (
      <>
         <div className="header">
            <img src={require("../assets/2.png")} alt="logo" />
            <nav>
               {menuItems.map((item) => (
                  <div className="nav__items__container" key={item.name}>
                     <Link className="nav__items" to={item.name}>
                        {item.name}
                     </Link>
                  </div>
               ))}
               <div>
                  <FontAwesomeIcon
                     className="nav__admin__button"
                     icon={faHouse}
                  />
                  {!isSideBarOpen && (
                     <FontAwesomeIcon
                        className="nav__dropdown__button"
                        icon={faBars}
                        size="2xl"
                        onClick={onDropDownButtonClicked}
                     />
                  )}
                  {isSideBarOpen && (
                     <FontAwesomeIcon
                        icon={faClose}
                        size="2xl"
                        onClick={onDropDownButtonClicked}
                     />
                  )}
               </div>
            </nav>
         </div>
         {isSideBarOpen && <div className="nav__dropdown"></div>}
      </>
   );
   return content;
};

export default DisplayHeader;
