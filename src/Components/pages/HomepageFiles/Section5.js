import React from 'react'
import { Button } from "./Button";
import {Illustration} from './Illustration'
function Section5() {
  const IlluStration = {
    img: "/images/logi.svg",
    alt: "team--illustration",
    srcM: "/images/logi2.svg",
    scr1: "",
    src2: "",
  };
    return (
      <>
        <section className="section--five">
          <article className="section--five--article">
            <h3>Logistics</h3>

            <p className="body">
              When parts are machined, they undergo processes like anodizing,
              passivation, magnaplating or powder coating as per requirements.
              All parts undergo another Inspection operation to test outside
              processing.
            </p>
            <p className="body">
              Once the parts are signed off, they are moved to the shipping
              department. Parts are packaged for safe shipment. All documents
              are sent with parts including material certifications and
              inspection reports. We use UPS, FedEx and common carriers to ships
              parts all around the world.
            </p>
            <Button value="Contact Form" clName="secondary-variant-1" />
          </article>
          <section className="Illustration">
            <Illustration IllObj={IlluStration} />
          </section>
         
        </section>
      </>
    );
}

export { Section5}
