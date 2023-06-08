import React,{useState} from 'react'
import people from "../data.js"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import "./reviews.scss"

const Reviews = () => {
 const [index,setIndex] = useState(0)
 const {job,image,text,name,id} = people[index]

const checkNumber = (number)=>{
if(number > people.length-1){
  return 0
}
if(number < 0){
  return people.length-1
}
return number
 }

 const nextPerson = ()=>{
  setIndex((currentIndex)=>{
    let newIndex = currentIndex + 1
    return (checkNumber(newIndex))
    //alternative
    // const newValue = (index + 1) % people.length;
  })
 }

 const prevPerson = ()=>{
  setIndex((currentIndex)=>{
    let newIndex = currentIndex - 1 
    return (checkNumber(newIndex))
    })
 }

 const randomPerson= ()=>{
  let randomNumber = Math.floor(Math.random() * people.length)
  if(randomNumber === index){
    randomNumber = index + 1
  }
  // const newIndex = randomNumber % people.length;
  setIndex(checkNumber(randomNumber))
 }
 

  return (
    <main>
    <section className="reviews">
      <div className="img-container">
      <img src={image} alt={name} />
      <span className= "quote-icon">
        <FaQuoteRight/>
      </span>  
      </div>
      

      <h3>{name}</h3>
      <p className="job">{job}</p>
      <p className="desc">{text}</p>
    
    <div className="btn-container">
      <button className="btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className="btn surprise-btn" onClick={randomPerson}>
      surprise me
    </button>
    </section>
    </main>
  )

 
  
}

export default Reviews