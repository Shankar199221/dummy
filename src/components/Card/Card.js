import React from 'react'
import './Card.css'
function Card({item}) {
    
    return (
        <div className="card">
           <img className="card__image" src={item.links.mission_patch} alt="logo"  width="150px" height="180px" />
           <span>Mission Ids:{} </span>
           <span>Launch Year:{} </span>
           <span>Succesful Launch:{} </span>
           <span>Succesful Landing:{} </span>
        </div>
    )
}

export default Card
