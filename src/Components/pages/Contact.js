import React from "react";
import { Nav } from "./HomepageFiles/Nav";
import { Form2 } from "./Form2";
import { Footer } from "./Footer";
function Contact() {
  return (
    <>
      <Nav />
      <header className="contact--header">
        <article className='hero--text'>
          <h2 className="sub">Send an Email</h2>
         
        </article>
        <Form2 />
      </header>
      <Footer />
    </>
  );
}

export { Contact };
