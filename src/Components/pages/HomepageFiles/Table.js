import React from "react";

function Table({ data }) {
  return (
    <>
      <section className="table">
        <h3>Materials</h3>
        {data.map &&
          data.map((d) => {
            return (
              <article key={d.id}>
                <p className="body">{d.material}</p>
                <p className="body type">{d.type}</p>
              </article>
            );
          })}
      </section>
    </>
  );
}

export { Table };
