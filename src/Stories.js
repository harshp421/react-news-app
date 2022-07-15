import React from 'react'
import { useGlobleContext } from './Context'
import './App.css'

const Stories = () => {
    const {hits,isLoding,removepost}=useGlobleContext();
    if(isLoding){
        return(
            <>
            <h1>loading........</h1>
            </>
        )
    }
  return (
    
    
    <div className="stories-div">

   
    {hits.map((c)=>{
    const {title,author,objectID,url,num_comments}=c;
   return(
   <>
   <div className="card" key={objectID}>
    <h1>{title}</h1>
    <p>
        by {author}|<span> {num_comments}</span> comments
    </p>
    <div className="card-button">
        <a href={url} target="_blank" className='btn' > read more</a>
        <a href='#' className='btn'  onClick={()=>removepost(objectID)}> Remove</a>

    </div>
   </div>
  
   </>)
    })}
     </div>
    
  )
}

export default Stories