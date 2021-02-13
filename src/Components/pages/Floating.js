import React, { useState } from 'react'
import {LinkFloat} from './LinkFloat'
import {Svg} from './HomepageFiles/Svg'
function Floating() {
    const [float, setFloat] = useState(false)
    return (
      <>
        <section className="floating--section">
          <button className="float--icon" onClick={()=>{setFloat(!float)}}>
          <Svg img="/images/phone.svg" alt='phone icon'/>
          </button>
          {float&&<LinkFloat/>}
        </section>
      </>
    );
}

export{ Floating}
