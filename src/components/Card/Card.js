import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
function Card({item}) {
    
    return (
        <div className="card">
           <img className="card__image" src={item.links.mission_patch} alt="logo"  width="150px" height="180px" />
           <span>Mission Ids:&nbsp;{item.rocket.rocket_id} </span>
           <span>Launch Year:{item.launch_year} </span>
           <span>Succesful Launch:{item.launch_success=== true ? "True" :"False"}  </span>
           <span>Succesful Landing:{item.launch_success=== true ? "True" :"False"} </span>
        </div>
    )
}
Card.propTypes ={
    item:PropTypes.object
}

export default Card
