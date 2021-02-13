import React,{useContext} from 'react'
import { msgCont } from "./Context";
function About() {
      const { name, setName } = useContext(msgCont);
    return (
      <>
        <h1>About</h1>
        <button
         className='primary'
          onClick={() => {
            setName("shared-About");
          }}
        >
          {name}
        </button>
      </>
    );
}

export { About}
