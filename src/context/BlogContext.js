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

/* 
3.30.2022
we will be adding a reduser to better manage the different helper functions and avoid creating multiple
helper function for whatever is needed in the action.
*/