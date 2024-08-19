import React from "react";

function Services(props) {
  const { description, subheading1, subdescription1, image1,
    subheading2, subdescription2, image2,
    subheading3, subdescription3, image3,
    subheading4, subdescription4, image4,
    subheading5, subdescription5, image5,icon1,icon2,icon3,icon4,icon5 } = props;
    const services = [
      { icon:icon1, subheading: subheading1, subdescription: subdescription1, image: image1 },
      { icon:icon2,subheading: subheading2, subdescription: subdescription2, image: image2 },
      { icon:icon3, subheading: subheading3, subdescription: subdescription3, image: image3 },
      { icon:icon4, subheading: subheading4, subdescription: subdescription4, image: image4 },
      { icon:icon5, subheading: subheading5, subdescription: subdescription5, image: image5 }
    ];
    const filteredServices = services.filter(service => service.subheading);
  return (
    <section className="services-details section-padding">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-12 heading-4">
              <div>
                <h4>{props.description}</h4>
              </div>
            </div>
          </div>
        </div>
        {filteredServices.map((service, index) => (
          <div key={index} className="row serv-imgs mt-20 mb-90 align-items-center">
            <div style={{textAlign:'center'}} className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : ''}`}>
              <div className="img o-hidden radius-15 fit-img md-mb30">
                <img style={{width:'65%',mixBlendMode:'multiply'}} src={service.image} alt="" />
              </div>
            </div>
            <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : ''}`}>
              <div className="choose-content">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.subheading}</h3>
                <p>
                  {service.subdescription}
                </p>
              </div>
            </div>
          </div>
        ))}

       
      </div>
    </section>
  );
}

export default Services;
