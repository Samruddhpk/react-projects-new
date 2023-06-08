import React from 'react'
import "../styles/Tour.scss"
import {useState} from "react"

const Tour = ({image,id,info,name,price,removeTour}) => {
const [readMore,setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
      <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0,200)}... `}
        <button className="readMore-btn" onClick={()=>setReadMore(!readMore)}>
          {readMore ? `show less` : `read more`}
        </button></p>
        <button className="btn delete-btn" onClick={()=>removeTour(id)}>not interested</button>
      </div>
    </article>
  )
}

export default Tour