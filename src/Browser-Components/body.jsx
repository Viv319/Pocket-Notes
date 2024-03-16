import React, {useState}  from 'react'
import './body.css'
import Right from './right.jsx'
import Left from './left.jsx'

export default function body() {
  return (
    <div className='bodycontainer'>
      {/* this is body */}
      <Left></Left>
      <Right></Right>
      
    </div>
  )
}
