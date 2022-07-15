import React from 'react'
import { useGlobleContext } from './Context'
import './App.css'

const Search = () => {
  const {query,searchitem}=useGlobleContext();
  return (
  <>
   <h1>Welcome to harsh parmar Tech news Website </h1>
   <form onSubmit={(e)=>e.preventDefault()}>
    <div className='center'>
      <input type="text" name="" value={query} placeholder='search hear' id="inputTeg" onChange={(e)=>searchitem(e.target.value)}/>
    </div>
   </form>
  </>
  )
}

export default Search