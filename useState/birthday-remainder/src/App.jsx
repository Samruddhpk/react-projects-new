import { useState } from 'react'
import "./app.scss"
import data from "./data.js"
import List from "./List"

function App() {
const [people,setPeople] = useState(data)

  return (
    <main>
    {people.length===0 ? 
        <section className="container">
        <h3>{people.length} birthdays today</h3>
        <button type="button" className="btn" onClick={()=>setPeople(data)}>
          refresh
        </button>
        </section> 
            : 
        <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button type="button" className="btn" onClick={()=>setPeople([])}>
          clear all
        </button>
      </section>}
     
    </main>
  )
}

export default App
