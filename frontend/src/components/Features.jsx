import React from 'react'
import Separation from './Separtion'
import Frame from './Frame'
import '../styles/Features.css'

function Features() {
  return (
    <div>
        <Separation title={"Fonctionnalités"} />
        <div className='frames'>
        <Frame FrameTitle={"jkbvkjb"} FrameSubtitle={"subtitleValue"} FrameDescription={"descriptionValue"} /> 
        <Frame />
          <Frame />
        </div>
        
    </div>
  )
}

export default Features