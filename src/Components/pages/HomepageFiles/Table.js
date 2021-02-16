import React from "react";

function Table({ data }) {
  return (
    <>
      <section className="table">
        <h3>Materials</h3>
        <article className='materials--table'>
          {data &&
            data.map((d) => {
              return (
                <article key={d.id}>
                  <p className="body">{d.material}</p>
                  <p className="body type">{d.type}</p>
                </article>
              );
            })}
        </article>
      </section>
    </>
  );
}

export { Table };
