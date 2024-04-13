import React, { useContext } from 'react'
import './CSS/Shopcat.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/download.jpg'
import Item from '../Components/Item/Item'

const Shopcat = (props) => {
  const {Allproduct}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className="shopcategory-banner"src={props.banner} alt="" />
      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {Allproduct.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} name={item.name} img={item.img} old_price={item.old_price} new_price={item.new_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shocategory-loadmore">
        Explore more
      </div>
    </div>
  )
}
export default Shopcat
                               