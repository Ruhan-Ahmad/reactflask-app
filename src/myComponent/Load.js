import {React, useState,useEffect} from 'react'
import {Show} from "./Show"


export const Load = () => {
    const [value, setvalue] = useState([])
    const [dar, setdar]= useState()
  let res = async(e) =>{
    e.preventDefault()
    let result = await fetch('https://fifthsemres.herokuapp.com/show', {
      method: "POST"
    })
    let data = await result.json()
    setvalue(data.data)
  }
  return (
    <div> 
      <form onSubmit={res} action="#">
      {value.map((dat ,i)=>(
        dat.map((d,r)=>(
          <Show data = {d}/>
        ))
      ))}
        <button type='submit'>SHOW DATA</button>
      </form>
    </div>
  );
}
