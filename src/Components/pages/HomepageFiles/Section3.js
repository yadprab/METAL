import React from 'react'
import {Card} from './Card'
function Section3() {
    return (
      <>
        <section className="section--three">
          <h3>Our service</h3>
          <article>
            <h3 className="sub">CNC machining</h3>
            <p className="body">
              CNC machining is the robust form of manufacturing that involves
              removing metal with special tools, resulting in desired geometric
              shape. Some of our partners machines in Peenya are as follows.
            </p>
          </article>
          <Card/>
        </section>
      </>
    );
}

export { Section3}
