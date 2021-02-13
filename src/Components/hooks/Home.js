import React,{useContext} from 'react'
import {msgCont}  from './Context'
function Home() {
    const {name, setName} = useContext(msgCont)
    return (
      <div>
        <h1>Home</h1>
        <button onClick={()=>{setName('shared')}}>{name}</button>
      </div>
    );
}

export { Home}
