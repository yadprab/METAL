import React, { useState } from 'react'
import { FormComp } from './Form';

function Button({value, clName}) {
  const [state, setState] = useState(false)


    return (
      <>
        <button id="section--contact" className={clName} onClick={()=>{setState(true)}}>
          {value}
        </button>
        {state? <FormComp state={setState}/>:null}
      </>
    );
}

export { Button}
