import React, { useState } from 'react'

const Input = (props) => {
    const [value,setValue] = useState("")
    function changed(){
      props.setvalue([...props.val,value])
    }
  return (
    <div>
        <input type="text" placeholder= "Enter Num" onChange={e=>setValue(e.target.value)}/>
        <button onClick={changed}>set</button>
    </div>
  )
}

export default Input
