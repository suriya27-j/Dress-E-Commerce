import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="DescriptionBox-navigator">
            <div className="DescriptionBox-nav-box">Description</div>
            <div className="DescriptionBox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="DescriptionBox-Description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, suscipit numquam debitis deserunt nobis libero rerum consequuntur! Commodi tempore, excepturi dolor ab aliquid hic adipisci aspernatur quos tenetur repudiandae expedita iure, provident, quae enim repellendus eos qui fugit nam sint.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi itaque error distinctio libero pariatur sapiente mollitia fugiat, temporibus quaerat sit.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox