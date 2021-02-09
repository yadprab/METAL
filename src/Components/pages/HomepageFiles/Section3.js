import React from 'react'
import {Card} from './Card'
import {Table} from './Table'
import {data} from './data'
import { Button } from "./Button";
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
          <Card />
          <Table data={data} />

          <Button value="Contact us" clName="secondary-variant-1" />
        </section>
      </>
    );
}

export { Section3}
