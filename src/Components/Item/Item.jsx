import React from 'react'
import "./Item.css"

function Item(props) {
  return (
    <div className="item">
        <img src={props.img} alt="" className='itemimg'/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>${props.new_price}</div>
        </div>
    </div>
  )
}

export default Item