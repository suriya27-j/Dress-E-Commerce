import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/Admin Panel Assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts,setallproducts]= useState([])


  const  fetchinfo = async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json()
    .then((data)=>{setallproducts(data)}))
  }
  useEffect(()=>{
    fetchinfo();
  },[])

  const removeproduct = async (id)=>{
    await fetch("http://localhost:4000/removeproduct",{
      method:'post',
      headers:{
        Accept:'application/json',
        'content-type':'application/json',

      },body:JSON.stringify({id:id})
    })
    await fetchinfo();
  }
  return (
    <div className='list-Product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
        <div className="listproduct-allproducts">
          <hr />
          {allproducts.map((product,index)=>{
            return <div  key={index}className="listproduct-format-main listproduct-format">
              <img className='listproduct-product-icon' src={product.image} alt="" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{removeproduct(product.id)}}  className="listproduct-remove-icon" src={cross_icon} alt="" />
            </div>
          })}
        </div>
    </div>
  </div>
  )
}

export default ListProduct