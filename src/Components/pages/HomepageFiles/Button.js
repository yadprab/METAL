import React, { useState } from 'react'
import { FormComp } from './Form';

function Button() {
  const [state, setState] = useState(false)


    return (
      <>
        <button id="section--contact" className="secondary-variant-1" onClick={()=>{setState(true)}}>
          Contact us
        </button>
        {state? <FormComp state={setState}/>:null}
      </>
    );
}

export { Button}
