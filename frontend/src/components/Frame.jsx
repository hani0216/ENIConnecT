import React from 'react'
import '../styles/Frame.css'

function Frame({FrameTitle , FrameSubtitle , FrameDescription}) {
  return (
    <div className='Frame'>
            <div className='main-container2'>
        <div className='title'>
            <text>{FrameTitle}</text>
        </div>
        <div className='subtitle'>
            <text>{FrameSubtitle}</text>
        </div>
        <div className='description'>
            <text>{FrameDescription}</text>
        </div>



    </div>

    </div>

  )
}

export default Frame