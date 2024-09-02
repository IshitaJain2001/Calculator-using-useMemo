import React from 'react'
import Input from './Input'
import Header from './Header'
import Operations from './Operations'
import Answer from './Answer'

export default function App() {
  return (
    <div className='h-[727px] w-full bg-red-100'>
      <Header/>
     
      <Input />
     
      
  <Operations/>
  <Answer/>
    </div>
  )
}

