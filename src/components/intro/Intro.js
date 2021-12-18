import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import "./intro.css";

const Intro = () => {
  return (
    <Container>
      <Element id="about">
        <Row className="i">
          <Col md={7} className="i-left">
            <h2 className="i-intro">Hello, My Name is</h2>
            <h1 className="i-name">Prabakaran</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Dedicated</div>
                <div className="i-title-item">Hardworking</div>
                <div className="i-title-item">Self-Confident</div>
                <div className="i-title-item">Quick learner</div>
                <div className="i-title-item">Leadership skills</div>
              </div>
            </div>
            <p className="i-desc">
              To work in a challenging environment, that fosters professional
              and personal growth and has an urge to reach the most challenging
              position within an organization that provides ample opportunities
              to learn and to contribute.
            </p>
            <a
              href="https://drive.google.com/file/d/1n0whnlGlMJW8okB1ls7IEXHahsQXhn2b/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="i-butt">Resume</button>
            </a>
          </Col>
          <Col md={5} className="i-right">
            <img
              src="https://www.bytestechnolab.com/wp-content/uploads/2020/02/mean-vector2.png"
              alt=""
              className="i-img"
            />
          </Col>
        </Row>
      </Element>
    </Container>
  );
};

export default Intro;
