const reducer=(state,action)=>{

 switch (action.type) {

case"SET_LOADING":
 return{
    ...state,
    isLoding: true,
   
 }

    case "GET_STORIES":
        return{
            ...state,
            isLoding: false,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages,
        }
    case "REMOVE_POST":
        return{
            ...state,
            hits:state.hits.filter((curELEM)=>curELEM.objectID !== action.payload),
        }
    case "search_item":
        return{
            ...state,
            query:action.payload,
        }
    case "PREV_PAGE":
        let pageNum=state.page;
        if (pageNum<=0){
            pageNum=0;
        }
        else{
            pageNum=pageNum-1;
        }
        return{
            ...state,
            page:pageNum
        }



        case "NEXT_PAGE":

            let pageNumnext=state.page+1;
            if (pageNumnext>=state.nbPages){
                pageNumnext=0;
            }
             return{
            ...state,
            page: pageNumnext
        }
        

        
       
 
    default:
        break;
 }
 return state;
}
export default reducer;