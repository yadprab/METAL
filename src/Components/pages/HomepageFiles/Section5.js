import React from 'react'
import { Button } from "./Button";

function Section5() {
    return (
      <>
        <article className="section--five">
          <h3>Logistics</h3>
   
          <p className="body">
            When parts are machined, they undergo processes like anodizing,
            passivation, magnaplating or powder coating as per requirements. All
            parts undergo another Inspection operation to test outside
            processing.
          </p>
          <p className="body">
            Once the parts are signed off, they are moved to the shipping
            department. Parts are packaged for safe shipment. All documents are
            sent with parts including material certifications and inspection
            reports. We use UPS, FedEx and common carriers to ships parts all
            around the world.
          </p>
          <Button value="Contact us" clName="secondary-variant-1" />
        </article>
      </>
    );
}

export { Section5}
