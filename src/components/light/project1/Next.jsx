import React from 'react';
import { Link } from 'react-router-dom';

function Next(props) {
  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div
              className="text-left box bg-img"
            >
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">Prev Project</h6>
                  <Link to={props.prvlink} className="fz-40 fw-600 stroke">
                    {props.prvname}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rest">
            <div
              className="text-right d-flex box bg-img"
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Next Project</h6>
                    <Link to={props.fwdlink} className="fz-40 fw-600 stroke">
                      {props.fwdname}
                    </Link>
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/portfolio" className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">all Projects</span>
        </Link>
      </div>
    </section>
  );
}

export default Next;
