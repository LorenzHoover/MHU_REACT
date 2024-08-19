import React from 'react'

const Card = ({children, bg = "bg-gray-100"}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-lg border border-black hover:shadow-xl transition-shadow duration-300`}>
        {children}
    </div>
  )
}

export default Card;
