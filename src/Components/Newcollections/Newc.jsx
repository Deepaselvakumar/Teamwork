import React from 'react'
import "./Newc.css"
import newcollections from "../Assets/newc"
import Item from "../Item/Item"


export const Newc = () => {
  return (
    <div className='new-collections'>
<h1>New Collections</h1>
<hr />
<div className='collections'>

{newcollections.map((item,i)=>{
                return<Item key={i} name={item.name} img={item.img} old_price={item.old_price} new_price={item.new_price}/>
            })}
   
</div>



    </div>
  )
}
