import React from 'react'
import {Button} from './Button'
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
              <figure>
                <picture>
                  <img src="/images/head1.png" alt="" />
                </picture>
              </figure>
              <figure>
                <picture>
                  <img src="/images/head2.png" alt="" />
                </picture>
              </figure>
              <figure>
                <picture>
                  <img src="/images/head3.png" alt="" />
                </picture>
              </figure>
            </section>
          </section>
        </header>
      </>
    );
}

export  {Header}
