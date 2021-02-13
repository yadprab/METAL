import React, { useRef } from "react";
import { Gallery } from "./Gallery";
import { Button } from "./Button";
import {Figure} from './Figure'

function Section4() {
  const interRef = useRef(null);
  const Fig = {
    img: "/images/card.jpg",
    alt: "team--illustration",
    srcM: "",
    scr1: "",
    src2: "",
  };

  return (
    <>
      <section className="section--four">
        <article className="section--four--article" ref={interRef}>
          <h3>Quality assurance</h3>

          <p className="body">
            All operations and parts are inspected by our team. A customer has
            to be 100% sure that all procedures have been followed and that all
            tolerances have been met.
          </p>
          <p className="body">
            All necessary documentations are planned early and our team is on
            the factory floor to ensure that instructions are followed properly.
          </p>

          <Button value="Contact Form" clName="secondary-variant-1" />
        </article>
        <Figure Fig={Fig} figC = 'QA methods'/>
      </section>
      <section className="card--section">
        <Gallery />
      </section>
    </>
  );
}

export { Section4 };
