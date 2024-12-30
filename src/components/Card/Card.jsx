import React from 'react'
import Icon from '../icon/Icon'
import './Card.css'

function Card({gameEnd, player, onPlay, index}) {

    let icon = <Icon/>
    if(player === 'x')
    {
        icon = <Icon name="cross"/>
    } else if(player === 'o')
    {
        icon = <Icon name = "circle"/>
    }

  return (
    <div>
      <div 
      onClick={() => !gameEnd && player==="" && onPlay(index)}
      className="card">
        {icon}
      </div>
    </div>
  )
}

export default Card
