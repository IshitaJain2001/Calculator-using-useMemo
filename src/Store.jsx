
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
case 'set_a': return {
    ...state,
    a:action.payload
}
case 'set_b':return{
    ...state,
    b:action.payload

}
  case  '+' :

  return {
    ...state,
    val: state.a+state.b
  }
    case '-':  
  return {
    ...state,
    val: Math.abs(state.a-state.b)
  }
        case '*': return {
            ...state,
            val: state.a*state.b
        }
            case '%': return{
                ...state,
                val: (state.a/state.b).toFixed(2)
            }
                default: return state

}
}
export const store= createStore(reducerfn)
