'use client';

import React, { useEffect } from 'react';
import data from '../../../l-data/portfolios/works0.json';
import data1 from '../../../l-data/portfolios/works01.json';
import data2 from '../../../l-data/portfolios/works02.json';
import data3 from '../../../l-data/portfolios/works03.json';
import data4 from '../../../l-data/portfolios/works04.json';
import data5 from '../../../l-data/portfolios/works05.json';
import data6 from '../../../l-data/portfolios/works06.json';






import { Helmet } from 'react-helmet';
function Wroks(props) {
  
  return (
    <>
      <Helmet>
        <script src="/dark/assets/js/hscroll2.js"></script>
      </Helmet>
      {props.id === '1' &&
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
      }
      {props.id === '2' &&
      <div className="works thecontainer ontop">
        {data1.map((item, i) => (
          <div key={i} style={{margin:'0'}} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      }
      {props.id === '3' &&
      <div className="works thecontainer ontop">
        {data2.map((item, i) => (
          <div key={i} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      }
      {props.id === '4' &&
      <div className="works thecontainer ontop">
        {data3.map((item, i) => (
          <div key={i} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      }

      {props.id === '5' &&
      <div className="works thecontainer ontop">
        {data4.map((item, i) => (
          <div key={i} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      }

      {props.id === '6' &&
      <div className="works thecontainer ontop">
        {data5.map((item, i) => (
          <div key={i} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      }

      {props.id === '7' &&
      <div className="works thecontainer ontop">
        {data6.map((item, i) => (
          <div key={i} className="panel">
            <div className="item">
              <div className="img">
                <img src={item} alt="" />
              </div>
            </div>
          </div>
        ))}
       
      </div>
      }
    </>
  );
}

export default Wroks;
