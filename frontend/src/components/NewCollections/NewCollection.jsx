import React, { useEffect, useState } from 'react'
import './NewCollections.css'

import Item from '../items/Items'
const NewCollection = () => {
  const[new_collection,setnewcollection]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/newcollection")
    .then((response)=>{
      response.json().then((data)=>setnewcollection(data))
    })

  },[])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

    </div>
  )
}

export default NewCollection