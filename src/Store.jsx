
import { createStore } from "redux";

const initialState={
    a:"",
    b:"",
 val:0
   

}
let reducerfn=(state=initialState,action)=>{
    console.log(action)
switch(action.type){
  case  '+' : return (parseInt(state.a)+parseInt(state.b))
    // case '-': return difference(a,b)
    //     case '*': return multiply(a,b)
    //         case '%': return divide(a,b)
                default: return state

}
}
export const store= createStore(reducerfn)
