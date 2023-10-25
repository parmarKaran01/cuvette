import React from 'react'
import "./BodyContainer.css"
import Menubar from './Menubar'
import MainContent from './MainContent'

const BodyContainer = () => {
  return (
    <div className='BodyContainer-container'>
      <Menubar />
      <MainContent />
    </div>
  )
}

export default BodyContainer