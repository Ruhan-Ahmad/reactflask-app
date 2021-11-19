import {React, useState, useEffect} from 'react'
import { Show } from './Show'

export const Load = () => {
    const [value, setvalue] = useState([])
  let res = async() =>{
    let result = await fetch('/api')
    let data = await result.json()
    setvalue(data.name)
  }
  useEffect(() => {
      res()
    }
  ,[])
  return (
    <div>
      {value.map((data, i)=>(
        <Show res={data} key={i} />
      ))}
    </div>
  );
}
