import createDataContext from './createDataContext';

const blogReducer = (state, action ) => {
     switch (action.type){
          case 'add_blogpost':
               return [...state, { id: Math.floor(Math.random() * 999999), title: `blog post # ${state.length + 1}`}]
          case 'delete_blogpost':
               return state.filter( blogPost => blogPost.id !== action.payload)
          case 'update_blogpost':
               return [...state, {}]
          default:
               return state;
     }
}  
// function to modify our reducer
const addBlogPost = dispatch => {
     return () => {
          dispatch({ type: 'add_blogpost'})
     }
}

const deleteBlogPost = dispatch => {
     return (id) => {
          dispatch({ type: 'delete_blogpost', payload: id})
     }
}

export const { Context, Provider } = createDataContext(
     blogReducer, 
     { addBlogPost, deleteBlogPost }, 
     []
     )

/* 
3302022.1
we will be adding a reduser to better manage the different helper functions and avoid creating multiple
helper function for whatever is needed in the action.

whenever we want to update the state we will do it by using the reducer.
The reducer has a state, action and the type of implementation.

1. create a blogReducer function to host the new functionality.
2. update the BlogProvider to adjust the new reducer by replacing useState with useReducer and adding the initial implementation 
named blogReducer.
3. update the setBlogPost to use dispatch.
4. finally, delete the addBlogPost function and remove it from the value prop inside the return blogcontext

at this point, the reducer works just as fine.

we will refactor our current setup with reducer.
3302022.2
the chances are that we will have other resources to thie context, so instead of duplicating


*/