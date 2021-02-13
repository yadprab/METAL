import React from 'react'
import {Card} from './Card'
import {Table} from './Table'
import {data} from './data'
import { Button } from "./Button";
import {Figure} from './Figure'
function Section3() {
    const Fig = {
      img: "/images/card.jpg",
      alt: "team--illustration",
      srcM: "",
      scr1: "",
      src2: "",
    };
    return (
      <>
        <section className="section--three">
          <article>
            <h3>Our service</h3>
            <h3 className="sub">CNC machining</h3>
            <p className="body">
              CNC machining is the robust form of manufacturing that involves
              removing metal with special tools, resulting in desired geometric
              shape. Some of our partners machines in Peenya are as follows.
            </p>
            <Button value="Contact Form" clName="secondary-variant-1" />
          </article>
          <Figure Fig={Fig} figC="Cnc methods" />
        </section>
        <section className="card--section">
          <Card />
        </section>
        <section className="table--section">
          <Table data={data} />
        </section>
      </>
    );
}

export { Section3}
