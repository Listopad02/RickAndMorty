import React from 'react'
import "./Search.css"
import { setName } from "../../store/filtersSlice"
import { useDispatch } from "react-redux"

const Search = () => {
  const dispatch = useDispatch();
  return (
    <>
      <form className='search'>
        <input 
          className='search-input' 
          type="text" 
          placeholder='Enter character name...' 
          onChange={e => dispatch(setName(e.target.value))}
        />
        {/* <button 
          className='search-button'
          type='submit'
          onClick={e => {
              e.preventDefault()
          }}
        >&#8594;</button> */}
      </form>
    </>
  )
}

export default Search