import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {

  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    console.log("Reducer line 9: ",reducer)
    console.log("Initial State: ",initialState)
    console.log("createDatacontext:ln 9: ",state)
    console.log("children: ln 10: ",children)
    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {}
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
     
    }
console.log("boundedActions ",boundActions)
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider };
}
