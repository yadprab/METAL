import React, { useLayoutEffect } from "react";
import { Nav } from "./HomepageFiles/Nav";
import { Button } from "./HomepageFiles/Button";

import { Footer } from "./Footer";
function AboutUs() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Nav />
      <header className="about--header">
        <section className="overflow">
          <div>
            <div className="video">
              <iframe
                title="about"
                src="https://player.vimeo.com/video/498564770?title=0&byline=0&portrait=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </section>
      </header>
      <main className="about--main">
        <article>
          <p className="body">
            MetalRipper is started with a rebellious spirit and lofty objective:
            to offer CNC machined parts at superior quality from India, while
            improving the skills of the people on the factory floor.{" "}
          </p>
          <p className="body">
            Every idea starts with a problem. Ours was simple: Indian
            manufacturing is often unreliable. We were CNC operators in a
            machine shop and worked hard, sometimes around the clock to get the
            job done. (We don’t recommend this). But we faced a lot of problems
            with maintaining quality and lead time. Maybe you have faced similar
            experience.{" "}
          </p>
          <p className="body">
            What was the problem? It turns out there was a simple explanation.{" "}
          </p>
          <p className="body">
            {" "}
            The manufacturing process is disconnected from the machine
            operators. There are so many people involved in the process Project
            Engineer, CAM Programmer, Quality line inspector, Supervisor. Hence
            the operators who handle machining are left unaccountable and fails
            to rise to the level of Machinist.{" "}
          </p>
          <p className="body">
            We started MetalRipper to integrate the machining process with the
            machine operators and assist them to become skilled machinists.
            There’s nothing complicated about it. Good machinist, good outcome{" "}
          </p>
        </article>
        <Button value="Contact us" clName="secondary-variant-1" />
      </main>
      <Footer />
    </>
  );
}

export { AboutUs };
