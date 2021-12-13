import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import "./about.css";

const About = () => {
  return (
    <Container>
      <Element id="skills">
        <Row>
          <Col md={6} className="a">
            <div className="a-back"></div>
            <img
              src="https://codingthesmartway.com/wp-content/uploads/2019/01/mern_logo.png"
              alt="about"
              className="a-img"
            />
          </Col>
          <Col md={6} className="a-right">
            <h1 className="a-title">Technologies</h1>
            <p className="a-sub">
              I have worked across all these technologies to create a projects.
            </p>
            <div>
              <img
                className="a-img-front"
                src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png"
                alt=""
              />
              <img
                className="a-img-boot"
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_wordmark_logo_icon_146620.png"
                alt=""
              />
              <img
                className="a-img-react"
                src="https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="a-img-node"
                src="https://partiri.net/wp-content/uploads/2018/02/Node_js_Logo_2250x960-1024x437.png"
                alt=""
              />
              <img
                className="a-img-express"
                src="https://vectorified.com/images/express-js-icon-20.png"
                alt=""
              />
            </div>
            <img
              className="a-img-mongo"
              src="http://pluspng.com/img-png/mongodb-png-read-only-views-in-mongodb-3-4-413.png"
              alt=""
            />
          </Col>
        </Row>
      </Element>
    </Container>
  );
};

export default About;
