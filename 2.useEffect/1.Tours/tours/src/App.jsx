import { useState,useEffect } from 'react'
import Loading from "./components/Loading";
import Tours from "./components/Tours"

const url = 'https://course-api.com/react-tours-project';


function App() {

  const [isloading,setIsLoading] = useState(true)
  const [tours,setTours] = useState([])

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }

  const fetchTours =async ()=>{
  setIsLoading(true)
    try {
    const response = await fetch(url)
    const tours = await response.json()
    // console.log(tours) 
    setIsLoading(false)
    setTours(tours)
} catch (error) {
  console.log(error)
  setIsLoading(false)
}
  }

  useEffect(() => {
    fetchTours()
  }, [])
  
  if(isloading){
    return (
    <main> 
    <Loading/>
    </main>
    )
  }

  if(tours.length===0){
    return (

      <div className="section">
        <h1>no tours left</h1>
        <button className="btn refresh-btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
 
    )
  }
  
  return (
    <main >
    {/* <Loading/> */}
    <Tours tours={tours} removeTour = {removeTour}/>
    </main>
  )
}

export default App
