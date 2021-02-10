import React from 'react'
import {Button} from './Button'
import {HeaderSvg} from './HeaderSvg'
const Header=()=> {
    return (
      <>
        <header>
          <section className="hero--section">
            <article className="hero--text">
              <h1>Your INDIAN Machining partner</h1>
              <h2 className="sub">
                Quality parts machined from India at competitive prices
              </h2>
              <Button clName="primary" value='Talk with us'/>
               
              
              
            </article>
            <section className="hero--img">
      
            <HeaderSvg/>
            </section>
          </section>
        </header>
      </>
    );
}

export  {Header}
