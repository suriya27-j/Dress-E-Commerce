import React, { useEffect, useState } from 'react'
import './popular.css'
import Items from '../items/Items'

const Popular = () => {

  const [popular_in_women,setpopular_in_women] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/popularinwomen")
    .then((response)=>response.json().then((data)=>setpopular_in_women(data))

    )
  },[])
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popular_in_women.map((item,i)=>{
                return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

    </div>
  )
}

export default Popular