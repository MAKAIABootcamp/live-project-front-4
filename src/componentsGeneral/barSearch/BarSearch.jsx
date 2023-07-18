import React from 'react'
import { SearchGeneral } from './BarSearchStyle'


const BarSearch = () => {
  return (
    <>
    <SearchGeneral>
          <input type='search' placeholder='Search...'></input>
          <button>
            <img src="https://res.cloudinary.com/ddlvk2lsi/image/upload/v1689604814/LIVE/Im%C3%A1genes/Icons/lupa_vx8efk.png" width={20}/>
          </button>
        </SearchGeneral>
    </>
  )
}

export default BarSearch