import { Card } from "@mui/joy";
import React from "react";

const Blog = () => {
   const content = (
      <>
         <div class="blogs__container">
            <div class="left-side">
               <div class="blog__header">
                  <h1>Discover the Wonders of Multiple Linear Regression</h1>
                  <p>Date: January 10, 2024</p>
                  <p>Author: John Doe</p>
               </div>
               <div class="blog-post">
                  <img src={require("../../assets/demo.png")} alt="Blog" />
                  <p>
                     Multiple linear regression, a fascinating statistical
                     method...
                  </p>
               </div>
            </div>
            <div class="right-side">
               <div class="author-info">
                  <h2>About Me</h2>
                  <img
                     src={require("../../assets/demo.png")}
                     alt="Author"
                     // style="width: 80px; height: 80px"
                     style={{ width: "80px", height: "80px" }}
                  />
                  <p>
                     John Doe is a data enthusiast passionate about unraveling
                     the secrets...
                  </p>
               </div>
               <div class="tags">
                  <h2>Tags</h2>
                  <div class="tag-card">Data Science</div>
                  <div class="tag-card">Statistics</div>
                  <div class="tag-card">Machine Learning</div>
                  <div class="tag-card">Tutorial</div>
               </div>
            </div>
         </div>
      </>
   );
   return content;
};

export default Blog;
