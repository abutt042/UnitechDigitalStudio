'use client';

import React, { useEffect } from 'react';
import data from '../../../l-data/portfolios/works0.json';
import { Helmet } from 'react-helmet';
function Wroks() {
  return (
    <>
      <Helmet>
        <script src="/dark/assets/js/hscroll.js"></script>
      </Helmet>
      <div className="works thecontainer ontop">
        {data.map((item, i) => (
          <div key={i} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wroks;
