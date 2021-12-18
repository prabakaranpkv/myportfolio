import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import "./about.css";

const About = () => {
  return (
    <Container>
      <Element id="skills">
        <Row className="a">
          <Col md={5} className="a-left">
            <img
              src="https://clipartstation.com/wp-content/uploads/2019/11/qualities-and-skills-clipart-transparent-4.png"
              alt="about"
              className="a-img"
            />
          </Col>
          <Col md={7} className="a-right">
            <h1 className="a-title">Technologies</h1>
            <p className="a-sub">
              I have worked across all these technologies to create a projects.
            </p>
            <div>
              <img
                className="a-img-html"
                src="https://vectorified.com/images/html-css-icon-1.png"
                alt="html"
              />
              <img
                className="a-img-css"
                src="https://www.santiagobarrionuevo.com/wp-content/uploads/2014/04/CSS3-Logo.png"
                alt="css"
              />
              <img
                className="a-img-js"
                src="https://pluspng.com/img-png/logo-javascript-png-java-script-js-logo-format-ai-javascript-logo-vector-png-213.png"
                alt="js"
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
