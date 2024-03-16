import React from 'react'
import './right.css'

export default function right() {
  return (
    <div className='rightcontainer'>
      
      <header className='header'>
        <div id='selectTag'>
          <div id='shortName'></div>
          <div id="notes">My Notes</div>
        </div>
      </header>

      <img className='mainImage' src='./src/images/image-bg.png'></img>
      <h3 className='pocket'>Pocket Notes</h3>
      <p className='textRight'>Send and receive messages without keeping your phone online. <br/>
         Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

      <img className='lock' src='./src/images/lock.png'></img>
      <p className='textbottom'>end-to-end encrypted</p>

      <footer className='footer'>
        <textarea className='input' placeholder='Enter your text here...........'></textarea>
      </footer>

    </div>
  )
}
