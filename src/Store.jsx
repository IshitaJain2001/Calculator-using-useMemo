
import { useState } from "react";
import { createStore } from "redux";

const initialState={
a:0,
    b:0,
 val:0
   

}
let reducerfn=(state=initialState,action)=>{
    console.log(action,state.a,state.b)
switch(action.type){
case 'set_a': 
case 'set_b':
  case  '+' :
    let a= parseInt(state.a) ||0
    let b= parseInt(state.b) ||0
  return {
    ...state,
    val: a+b
  }
    // case '-': return difference(a,b)
    //     case '*': return multiply(a,b)
    //         case '%': return divide(a,b)
                default: return state

}
}
export const store= createStore(reducerfn)
