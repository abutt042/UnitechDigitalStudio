import React from 'react';

function Challenge(props) {
  return (
    <section style={{paddingBottom:'50px'}} className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="mb-30">
            {props.heading}
            </h2>
            <p className="fz-15">
                {props.description}
              </p>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Challenge;
