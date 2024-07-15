import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <section
      className="blog-list-half section-padding sub-bg"
      data-scroll-index="5"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Blog</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Read Latest <span className="fw-200">News</span>
            </h2>
            <div className="ml-auto">
              <Link to="/light/blog-list2" className="go-more">
                <span className="text">View all posts</span>
                <span className="icon ti-arrow-top-right"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item main-bg md-mb50">
              <div className="row rest">
                <div className="col-lg-6 col-md-5 img rest">
                  <img
                    src="/light/assets/imgs/blog/b/2.jpg"
                    alt=""
                    className="img-post"
                  />
                  <div className="author d-flex align-items-center">
                    <div>
                      <div className="fit-img icon-img-50 circle">
                        <img src="/light/assets/imgs/blog/author.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-15 fz-14">
                      <div>
                        <span className="opacity-7">Posted by</span>
                        <br />
                        UiCamp
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 cont valign">
                  <div className="full-width">
                    <div className="tags mb-15">
                      <Link to="/light/blog-list">Marketing</Link>
                    </div>
                    <h5>
                      <Link to="/light/blog-details">
                        Free advertising for your online business.
                      </Link>
                    </h5>
                    <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                      August 6, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item main-bg">
              <div className="row rest">
                <div className="col-lg-6 col-md-5 img rest">
                  <img
                    src="/light/assets/imgs/blog/b/3.jpg"
                    alt=""
                    className="img-post"
                  />
                  <div className="author d-flex align-items-center">
                    <div>
                      <div className="fit-img icon-img-50 circle">
                        <img src="/light/assets/imgs/blog/author.png" alt="" />
                      </div>
                    </div>
                    <div className="ml-15 fz-14">
                      <div>
                        <span className="opacity-7">Posted by</span>
                        <br />
                        UiCamp
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7 cont valign">
                  <div className="full-width">
                    <div className="tags mb-15">
                      <Link to="/light/blog-list">Marketing</Link>
                      <Link to="/light/blog-list">Design</Link>
                    </div>
                    <h5>
                      <Link to="/light/blog-details">
                        Business meeting 2023 in San Francisco.
                      </Link>
                    </h5>
                    <span className="date fz-12 ls1 text-u opacity-7 mt-80">
                      August 6, 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
