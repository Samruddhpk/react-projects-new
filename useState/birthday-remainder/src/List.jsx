import React from 'react'

const List = ({people}) => {

    return (
    <>
        {people.map((person)=>{
            const {image,name,id,age} = person
            return <div key={id} className="person">
            <img src={image} alt={name} />
            <div className="info">
                <h3>{name}</h3>
                <p>{age} years</p>
            </div>
            </div>
            })}
    </>
  )
}

export default List