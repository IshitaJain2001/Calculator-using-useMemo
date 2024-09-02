import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Input() {

  const [valA,setvalA] = useState('')
  
  const [valB,setvalB] = useState('')

  const[err,setErr] = useState(false)
  const[err1,setErr1] = useState(false)
 
const dispatch= useDispatch()
  function settingA(e){
let val = e.target.value
if(isNaN(val) ){
setErr(true)
}
else{
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
      setvalB(val)
     
   
      setErr1(false)
    }
      }

  return (
    <div className='flex flex-col'>
      <div>
      <button className='ml-[500px] text-3xl mt-[8px]'>value of A :</button>
      <input type="text" className='rounded-[8px] h-[50px] w-[200px] border-[3px] border-gray-500 ml-[60px] mt-[50px] ' onChange={settingA}/>
      <button onClick={()=>{
        dispatch({
          type:'set_a',
          payload:valA
        })
      }} className='text-2xl ml-[20px] border border-black p-[10px] bg-gray-100'>Set A</button>
      {
        err&&<p className='ml-[720px] text-red-500'>Enter a valid number</p>
      }
      </div>
    <div>
    <button className='ml-[500px] text-3xl mt-[8px]'>value of B :</button>
    <input type="text" className='rounded-[8px] h-[50px] w-[200px] border-[3px] border-gray-500 ml-[60px] mt-[50px]' onChange={settingB}/>
    <button onClick={()=>{
       dispatch({
        type:'set_b',
        payload:valB
      })
    }} className='text-2xl ml-[20px] border border-black p-[10px] bg-gray-100' >Set B</button>
    {
        err1&&<p className='ml-[720px] text-red-500'>Enter a valid number</p>
      }
    </div>
      
    </div>
  )
}

