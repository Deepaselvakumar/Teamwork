import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsletter'>
<h1>get Exclusive offers on your email</h1>
<p>Subscribe to our newsletter and stay updates</p>
<div>
    <input type='email' placeholder='your email id'/>
    <button>Subscribe</button>
</div>


    </div>
  )
}

export default Newsletter