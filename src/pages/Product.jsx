import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDis from '../Components/ProductDisplay/ProductDis';

const Product = () => {
  const {Allproduct}=useContext(ShopContext);
  const {productId}=useParams();
  const product = Allproduct.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDis product={product}/>
    </div>
  )
}

export default Product