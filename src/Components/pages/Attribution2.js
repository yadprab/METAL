import React from 'react'
import { LinkSvg } from "./LinkSvg";
function Attribution2() {
    return (
      <>
        <div className="atb--2">
          <h3 className="sub"> Icons made by</h3>
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
      </>
    );
}

export {Attribution2}
