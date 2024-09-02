import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Operations() {
//   const {operation} = useSelector((state)=>state.operationfn)
  const dispatch=useDispatch()

  return (
    <div className='grid grid-rows-2 grid-cols-2 h-[200px] w-[200px] text-4xl border border-white ml-[600px] mt-[60px]'>
        <div className='border border-white px-[34px] py-[28px] ' onClick={()=>{
            dispatch({
                type:'+'
            })
        }}> <p className='img'>+</p></div>
        <div className='border border-white px-[34px] py-[28px]' onClick={()=>{
           dispatch({
            type:'-'
           })
        }}> <p className='img'>-</p></div>
        <div className='border border-white px-[38px] py-[28px]' onClick={()=>{
           dispatch({
            type:"*"
           })
        }}> <p className='img'>*</p></div>
        <div className='text-2xl border border-white px-[34px] py-[28px]' onClick={()=>{
          dispatch({
            type:'%'
          })
        }}> <p className='img'>%</p></div>
    </div>
  )
}
