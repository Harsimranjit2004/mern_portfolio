import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuItems } from "../config/menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faHouse } from "@fortawesome/free-solid-svg-icons";
const DisplayHeader = () => {
   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
   const onDropDownButtonClicked = () => {
      setIsSideBarOpen((prev) => !prev);
   };
   const navigate = useNavigate();
   const goToHome = () => {
      navigate("/");
   };
   // useEffect(()=>{

   // })
   const content = (
      <>
         <div className="header">
            <div onClick={goToHome}>
               <img src={require("../assets/main_logo.png")} alt="logo" />
            </div>
            <nav>
               {menuItems.map((item) => (
                  <div className="nav__items__container" key={item.name}>
                     <Link className="nav__items" to={item.path}>
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
         {isSideBarOpen && (
            <div className="nav__dropdown">
               {menuItems.map((item) => (
                  <div className="nav__dropdown__item" key={item.name}>
                     <Link
                        className="nav__items"
                        to={item.name}
                        onClick={onDropDownButtonClicked}
                     >
                        {item.name}
                     </Link>
                  </div>
               ))}
               <div className="nav__dropdown__item">
                  <Link className="nav__items" to={"admin"}>
                     Admin
                  </Link>
               </div>
            </div>
         )}
      </>
   );
   return content;
};

export default DisplayHeader;
