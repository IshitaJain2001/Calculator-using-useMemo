import React from 'react'
import { useSelector } from 'react-redux'

export default function Answer() {
   const {val}= useSelector(state=>state)
console.log(val)
  return (
    <div>
        <p className='pl-[500px] text-3xl mt-[40px]'>Your Answer -:{val}</p>
    </div>
  )
}
