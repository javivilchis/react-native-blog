import createDataContext from './createDataContext';

const blogReducer = (state, action ) => {
     console.log("State: ln 4 ", state)
     console.log("Action: ln 5 ", action)
     switch (action.type){
          case 'add_blogpost':
               console.log("ACTION: ", action.type, " State: ",state)
               return [
                 ...state,
                 {
                   id: Math.floor(Math.random() * 99999),
                   title: action.payload.title,
                   content: action.payload.content
                 }
               ]
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
     return (title, content, callback) => {
          dispatch({ type: 'add_blogpost', payload: { title, content }})
          callback()
     }
}
const editBlogPost = dispatch => {
     
}

const deleteBlogPost = dispatch => {
     return (id) => {
          dispatch({ type: 'delete_blogpost', payload: id})
     }
}

export const { Context, Provider } = createDataContext(
     blogReducer, 
     { addBlogPost, deleteBlogPost, deleteBlogPost, editBlogPost }, 
     []
     )