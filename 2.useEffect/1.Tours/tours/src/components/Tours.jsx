import React from 'react'
import Tour from "./Tour"
import "../styles/Tours.scss"

const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-container">
        {tours.map((tour)=>{
          return <Tour key = {tour.id} {...tour} removeTour= {removeTour}/>
        })}
      </div>
    </section>
  )
}

export default Tours