import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin Panel Assets/upload_area.svg'
import { json } from 'react-router-dom'

const AddProduct = () => {

  const[image,setimage]=useState(false)
  const[productDetails,setproductDetails]= useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })

  const imageHandler =(e)=>{
    setimage(e.target.files[0]);
  }

  const changeHandler =(e)=>{
    setproductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_product= async()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:"Post",
      headers:{
        Accept:'application/json',

      },
      body:formData,
    }).then((resp)=> resp.json()).then((data)=>{responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'Post',
        headers:{
          Accept:'application/json',
          'content-type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("product Added"):alert("Faild")
      })
    }

  }
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text"  value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input  value={productDetails.new_price} onChange={ changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select  value={productDetails.category} onChange={changeHandler} name='category' className='add-Product-selector'>
          <option value="women">Women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addProduct-itemfield">
        <label htmlFor='file-input'>
          <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img' /> 
        </label>
        <input  onChange={imageHandler}type="file"  name='image' id='file-input' hidden/>
      </div>
      <button  onClick={()=>{Add_product()}}className='addproduct-btn'>ADD</button>

    </div>
  )
}

export default AddProduct