import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
///creating context

let API = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
   isLoding: true,
   query: "",
   page: 0,
   nbPages: 50,
   hits: []

}
const AppContext = createContext();
//provider
const AppProvider = ({ children }) => {
    //api
   const [state, dispatch] = useReducer(reducer, initialState)
   //const hits;
   const fatchdata = async (url) => {

      dispatch({type:"SET_LOADING"})
      try {
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);

         dispatch({
            type: "GET_STORIES",
            payload: {
               hits: data.hits,
               nbPages: data.nbPages
            },
         })
      } catch (e) {
         console.log(e);
      }

   }

 const removepost=(post_id)=>{
   
   dispatch({
      type:"REMOVE_POST",
      payload:
         post_id,
   })

 }
 const searchitem=(search_value)=>{
   dispatch({
      type:"search_item",
      payload:search_value
   })

  
 }
 const getprevpage=()=>{
   dispatch({
      type:"PREV_PAGE",
      
   })
}
const getnextpage=()=>{
   dispatch({
      type:"NEXT_PAGE",
      
   })
}
 

   useEffect(() => {
      fatchdata(`${API}query=${state.query}&page=${state.page}`);
   }, [state.query,state.page])


   return (
      <AppContext.Provider value={{ ...state,removepost,searchitem,getprevpage,getnextpage}}>
         {children}
      </AppContext.Provider>
   )
}


/// custome Hook
const useGlobleContext = () => {
   return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobleContext };


///consumer  // use context hook