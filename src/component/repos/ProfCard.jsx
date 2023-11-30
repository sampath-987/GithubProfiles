// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ProfCard.css'

export default function ProfCard() {
  return (
    
    <div className='body' style={{height:'190px'}}>
        <div className='card'>
            <div className="imgBox">
                <img src="/src/component/photos/sampath.jpg"></img>    
            </div>
            <div className="content">
                <div className="details">
                    <h2>Sampath Tandel<br/><span>frontend devloper</span></h2>
                   <div className="data">
                        <h3>342<br/><span>posts</span></h3>
                        <h3>120k<br/><span>followers</span></h3>
                        <h3>342<br/><span>following</span></h3>
                        </div>
                </div>
            </div>
        </div>
      
    </div>

  )
}
