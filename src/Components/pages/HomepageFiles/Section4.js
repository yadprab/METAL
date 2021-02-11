import React from "react";
import { Gallery } from "./Gallery";
import { Button } from "./Button";

function Section4() {
  return (
    <>
      <article className="section--four">
        <h3>Quality assurance</h3>
    
        <p className="body">
          All operations and parts are inspected by our team. A customer has to
          be 100% sure that all procedures have been followed and that all
          tolerances have been met.
        </p>
        <p className="body">
          All necessary documentations are planned early and our team is on the
          factory floor to ensure that instructions are followed properly.
        </p>
        <Gallery />
        <Button value="Contact us" clName="secondary-variant-1" />
      </article>
    </>
  );
}

export { Section4 };
