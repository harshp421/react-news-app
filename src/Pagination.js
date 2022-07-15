import React from 'react'
import { useGlobleContext } from './Context'
import './App.css'

const Pagination = () => {
  const{page,nbPages,getprevpage,getnextpage}=useGlobleContext();
  return (
    <>
    <div className="center">
      <button onClick={()=>getprevpage()} className="btn">PREV</button>
      <p> {page+1} of 
      {nbPages}</p>
      <button onClick={()=>getnextpage()}className="btn" >NEXT</button>
    </div>
    </>
  )
}

export default Pagination