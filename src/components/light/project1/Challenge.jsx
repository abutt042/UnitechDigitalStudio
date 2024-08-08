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
            <p className="fz-15">
                {props.description}
              </p>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h2 className="mb-50 fw-400">
                Case Study
              </h2>
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
