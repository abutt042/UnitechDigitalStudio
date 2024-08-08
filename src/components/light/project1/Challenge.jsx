import React from 'react';

function Challenge(props) {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">
            {props.heading}
            </h2>
            <p className="fz-18">
                {props.description}
              </p>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">
                Case Study
              </h5>
              <p className="fz-18">
                {props.casestudy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
