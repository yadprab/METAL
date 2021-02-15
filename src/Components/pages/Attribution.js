import React from "react";
import {LinkSvg}  from './LinkSvg';
function Attribution() {
  return (
    <>
      <section className="attribution">
        <h3 className="sub">Illustrations provided by</h3>

        <a
          href="https://www.freepik.com/vectors/business"
          target="_blank"
          rel="noOpener noReferrer"
          className="body"
        >
          vectorjuice - freepik.com
          <LinkSvg />
        </a>

        <a
          href="https://www.freepik.com/vectors/business"
          target="_blank"
          rel="noOpener noReferrer"
          className="body"
        >
          stories - freepik.com
          <LinkSvg />
        </a>
        <div>
          Icons made by
          <a
            href="https://www.freepik.com"
            title="Freepik"
            target="_blank"
            rel="noOpener noReferrer"
            className="body"
          >
            freepik.com
            <LinkSvg />
          </a>
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noOpener noReferrer"
            className="body"
          >
            flaticon.com
            <LinkSvg />
          </a>
        </div>
      </section>
    </>
  );
}

export { Attribution };
