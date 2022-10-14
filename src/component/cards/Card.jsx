import React from 'react'

const Card = ({data:{confirmed,deaths,recovered,LastUpdate}}) => {
    if(!confirmed)
    {
        return "looding..."
    }
    // console.log(deaths)
  return (
    <div>
        <h1>{deaths.value}</h1>
        <h1>{recovered.value}</h1>
        <h1>{confirmed.value}</h1>
    </div>
  )
}

export default Card
