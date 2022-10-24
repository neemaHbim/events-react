import {useState} from 'react'
import './style.css'

function App() {
  const [firstname,setFName]=useState("");
const [lastname,setLName]=useState("");

const handler1=f=>{
  setFName(f.target.value)
}
const handler2= t=>{
setLName(t.target.value)

}
  return (
<>

<div><input type="text" value ={firstname} placeholder="Firstname" onChange={handler1}></input></div>
<div><input type="text" value ={lastname} placeholder="Lastname" onChange={handler2}></input></div>
<h1>Firstname:{firstname}</h1>
<h1>Lastname:{lastname}</h1>

</>
  );
}

export default App;
