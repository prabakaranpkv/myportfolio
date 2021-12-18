import { Element } from "react-scroll";
import "./experiance.css";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Intro = () => {
  return (
    <Container>
      <Element id="exp">
        <Row className="e">
          <Col md={6} className="e-left">
            <h2 className="e-intro">Experience</h2>
            <div className="e-title">
              <Carousel
                autoPlay={true}
                showIndicators={false}
                infiniteLoop={true}
                stopOnHover={true}
                showArrows={false}
              >
                <div>
                  <p className="e-head">Oct 2015 to Feb 2018</p>
                  <p className="e-sub">
                    Worked as a Manager in Sri Gayathri Cashews Import & Exports
                  </p>
                </div>
                <div>
                  <p className="e-head">March 2018 to Feb 2020</p>
                  <p className="e-sub">
                    Worked as a Auditing Executive in Go Fashion India Pvt Ltd{" "}
                  </p>
                </div>
                <div>
                  <p className="e-head">March 2020 to June 2021</p>
                  <p className="e-sub">Worked as a Manager in PTM Travels </p>
                </div>
              </Carousel>
            </div>
          </Col>
          <Col md={6} className="e-right">
            <img
              src="https://www.pinclipart.com/picdir/big/324-3245900_job-interview-desk-interview-skills-images-png-clipart.png"
              alt=""
              className="e-img"
            />
          </Col>
        </Row>
      </Element>
    </Container>

    // <div className="e" id="exp">
    //   <div className="e-left">
    //     <div className="e-left-wrapper">
    //       <h2 className="e-intro">Experience</h2>
    //       <div className="e-title">
    //         <Carousel
    //           autoPlay={true}
    //           showIndicators={false}
    //           infiniteLoop={true}
    //           stopOnHover={true}
    //           showArrows={false}
    //         >
    //           <div>
    //             <p className="e-head">Oct 2015 to Feb 2018</p>
    //             <p className="e-sub">
    //               Worked as a Manager in Sri Gayathri Cashews Import & Exports
    //             </p>
    //           </div>
    //           <div>
    //             <p className="e-head">March 2018 to Feb 2020</p>
    //             <p className="e-sub">
    //               Worked as a Auditing Executive in Go Fashion India Pvt Ltd{" "}
    //             </p>
    //           </div>
    //           <div>
    //             <p className="e-head">March 2020 to June 2021</p>
    //             <p className="e-sub">Worked as a Manager in PTM Travels </p>
    //           </div>
    //         </Carousel>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="e-right">
    //     <div className="e-bg">
    //       <img
    //         src="https://www.pinclipart.com/picdir/big/324-3245900_job-interview-desk-interview-skills-images-png-clipart.png"
    //         alt=""
    //         className="e-img"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Intro;
