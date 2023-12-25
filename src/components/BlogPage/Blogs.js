import React from "react";
const data = [
   {
      title: "Adventure Awaits: Explore the Beauty of Nature",
      imageURL: "https://via.placeholder.com/300",
      description:
         "Embark on a journey of discovery and experience the thrill of new adventures. This text can be longer and will dynamically expand.",
      blogURL: "your_blog_page_url_1.html",
   },
   {
      title: "Discover Hidden Gems: A Traveler's Guide",
      imageURL: "https://via.placeholder.com/300",
      description:
         "Uncover the best-kept secrets and hidden gems in your favorite travel destinations.",
      blogURL: "your_blog_page_url_2.html",
   },
   {
      title: "Culinary Delights: A Foodie's Paradise",
      imageURL: "https://via.placeholder.com/300",
      description:
         "Indulge in a gastronomic journey, exploring diverse flavors and culinary masterpieces.",
      blogURL: "your_blog_page_url_3.html",
   },
   {
      title: "Tech Trends: Navigating the Digital Frontier",
      imageURL: "https://via.placeholder.com/300",
      description:
         "Stay updated on the latest tech trends and innovations shaping the digital landscape.",
      blogURL: "your_blog_page_url_4.html",
   },
   {
      title: "Wellness Wonders: Achieving Balance and Harmony",
      imageURL: "https://via.placeholder.com/300",
      description:
         "Embark on a journey to enhance your well-being, finding balance and harmony in life.",
      blogURL: "your_blog_page_url_5.html",
   },
];

const Blogs = () => {
   const content = (
      <div className="blogs__main">
         <div className="blogs__heading__container">
            <h1>Read Blogs</h1>
         </div>
         <div className="blogs__cards__container">
            {data.map((item, index) => (
               <div key={item.title} className="blog__card">
                  <img
                     src={require("../../assets/demo.png")}
                     alt={item.title}
                  />
                  <div className="blog__card__content">
                     <h2 className="blog__card__title">{item.title}</h2>
                     <p className="blog__card__description">
                        {item.description}
                     </p>
                     <a href={item.blogURL} className="read-more">
                        Read More
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
   return content;
};

export default Blogs;
