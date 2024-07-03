
import { useMemo, useState } from "react";
import Input  from "./Input";
function App() {
  const [a,setA] =useState([])
  const [b,setB] =useState([])
  const [operation,setOperation] = useState(null)
  console.log(a,b)

  function sum(a,b) {
    setOperation("sum")
    return a+b
  }
  function subtract(a,b) {
    setOperation("subtract")
    return a-b
  }
  function multiply(a,b) {
  setOperation("multiply")
    return a*b
  }
  function divide(a,b) {
    setOperation("divide")
    return a/b
  }

  const res= useMemo(()=>{
    if(a.length>0 && b.length>0) {
      switch(operation){
        case "sum" : return sum( parseInt(a[a.length-1]),parseInt(b[b.length-1])   ) 
        case "subtract" : return subtract( parseInt(a[a.length-1]),parseInt(b[b.length-1])   ) 
        case "multiply" : return multiply( parseInt(a[a.length-1]),parseInt(b[b.length-1])   ) 
        case "divide" : return divide( parseInt(a[a.length-1]),parseInt(b[b.length-1])   ) 
      }
    }
    else{
      return 0
    }
  
  },[a,b,operation])
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <Input setvalue={setA} val={a} />
      <Input  setvalue={setB} val={b} />
     <button onClick={sum}>ADD</button>
     <button onClick={multiply}>MULTIPLY</button>
     <button onClick={subtract}>SUBTRACT</button>
     <button onClick={divide}>DIVIDE</button>
     <p>{res}</p>
    </div>
  );
}

export default App;
