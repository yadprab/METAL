import React from 'react'
import {imgArr} from './obj'
import {TeamComp} from './TeamComp'
function Team() {
   
    const [imgObj, imgObj2, imgObj3]= imgArr
 
   
    return (
      <>
        <section className="team--section">
          <h3>Meet our team</h3>
          <section className="teams">
            <TeamComp
              imgObj={imgObj}
              name="gokul kannan"
              role="Machinist & Planning"
            />
            <TeamComp
              imgObj={imgObj2}
              name="Ajeesh Vincent"
              role="Machinist & Quality Control"
            />
            <TeamComp
              imgObj={imgObj3}
              name="Jishnu Nambiar"
              role="Accounting-Logistics"
            />
          </section>
        </section>
      </>
    );
}

export{Team}