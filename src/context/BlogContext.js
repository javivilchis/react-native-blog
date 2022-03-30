import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
     const [blogPosts, setBlogPosts] = useState([]);

     // helper function
     const addBlogPost = () => {
          setBlogPosts([
               ...blogPosts, 
               { title: `Blog post Number ${blogPosts.length + 1}`}
          ])
     }
   
     return (
       <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
         {children}
       </BlogContext.Provider>
     );
   };
   

export default BlogContext;
