import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Input() {

  const [valA,setvalA] = useState('')
  
  const [valB,setvalB] = useState('')

  const[err,setErr] = useState(false)
  const[err1,setErr1] = useState(false)
 
let {a}= useSelector(state=>state)
console.log(a)
let {b}= useSelector(state=>state)
console.log(b)
  function settingA(e){
let val = e.target.value
if(isNaN(val) ){
setErr(true)
}
else{
a= val
  setvalA(val)
  setErr(false)
}
  }


  function settingB(e){
    let val = e.target.value
    if(isNaN(val) ){
    setErr1(true)
    }
    else{
      b=val
      setvalB(val)
      setErr1(false)
    }
      }
  console.log(valA,valB)
  return (
    <div className='flex flex-col'>
      <div>
      <button className='ml-[500px] text-3xl mt-[8px]'>value of A :</button>
      <input type="text" className='rounded-[8px] h-[50px] w-[200px] border-[3px] border-gray-500 ml-[60px] mt-[50px] ' onChange={settingA}/>
      {
        err&&<p className='ml-[720px] text-red-500'>Enter a valid number</p>
      }
      </div>
    <div>
    <button className='ml-[500px] text-3xl mt-[8px]'>value of B :</button>
    <input type="text" className='rounded-[8px] h-[50px] w-[200px] border-[3px] border-gray-500 ml-[60px] mt-[50px]' onChange={settingB}/>
    {
        err1&&<p className='ml-[720px] text-red-500'>Enter a valid number</p>
      }
    </div>
      
    </div>
  )
}

