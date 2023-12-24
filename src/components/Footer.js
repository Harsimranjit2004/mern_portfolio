import {
   faGithub,
   faInstagram,
   faLinkedin,
   faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";
import { menuItems } from "../config/menuItems";

const footLinks = [
   {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
   },
   {
      title: "GitHub",
      url: "https://github.com/",
   },
   {
      title: "Kaggle",
      url: "https://www.kaggle.com/",
   },
   {
      title: "Stack Overflow",
      url: "https://stackoverflow.com/",
   },
   {
      title: "LinkedIn",
      url: "https://www.linkedin.com/",
   },
];

const Footer = () => {
   const handleLinkedin = () => {};
   const content = (
      <>
         <div className="footer__main">
            <div className="footer__logos">
               <div className="footer__logo__container">
                  <img src={require("../assets/2.png")} alt="logo" />
               </div>
               <div className="footer__media__icons">
                  <div className="footer__linkedin" onClick={handleLinkedin()}>
                     <a href="https://www.linkedin.com/in/harsimranjit-singh-775781278/">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                     </a>
                  </div>
                  <div className="footer__whatsapp">
                     <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                  </div>
                  <div className="footer__github">
                     <FontAwesomeIcon icon={faGithub} size="2xl" />
                  </div>
                  <div className="footer__instagram">
                     <FontAwesomeIcon icon={faInstagram} size="2xl" />
                  </div>
               </div>
            </div>
            <div className="footer__navigation">
               <div>
                  <h2 className="footer__navigation__menu">Menu</h2>
               </div>
               <div className="footer__navigation__buttons">
                  {menuItems.map((item) => (
                     <div className="" key={item.name}>
                        <Link className="footer__navitems" to={item.name}>
                           {item.name}
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
            <div className="footer__usefullinks">
               <div className="footer__links__heading">
                  <h2>Links</h2>
               </div>
               <div className="footer__links__container">
                  {footLinks.map((item, index) => (
                     <div
                        className={`${item.title} footer__links`}
                        key={item.title}
                     >
                        <a href={item.url} className="footer__a__links">
                           {item.title}
                        </a>
                     </div>
                  ))}
               </div>
            </div>
            <div className="footer__personal__info">
               <div className="contact__information">
                  <h2>Contact Information</h2>
               </div>
               <div className="footer__info">
                  <div className="footer__email">
                     <h3> Email: hsdosanjh1234@gmail.com</h3>
                  </div>
                  <div className="footer__phone">
                     <h3>Phone: 905-781-5750</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright">@harsimranjit singh</div>
      </>
   );
   return content;
};

export default Footer;
