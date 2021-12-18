import { Container, Col, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wyv4qfi",
        "template_tfzxquk",
        formRef.current,
        "user_3eoH63WdsTvonr0WGwxx6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Element id="contact">
        <Row className="c">
          <Col md={6} className="c-left">
            <h1 className="c-title">Contact</h1>
            <div className="c-info-item">
              <img
                src="http://www.pngall.com/wp-content/uploads/2016/05/Phone-PNG-HD.png"
                alt="phone"
                className="c-icon"
              />{" "}
              +91 90032 82143
            </div>
            <div className="c-info-item">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr.png"
                alt="email"
                className="c-icon"
              />{" "}
              prabakaranpkv@gmail.com
            </div>
            <div className="c-info-item">
              <img
                src="https://www.freeiconspng.com/thumbs/github-icon/git-github-hub-icon-25.png"
                alt="address"
                className="c-icon"
              />{" "}
              <a
                href="https://github.com/prabakaranpkv"
                target="_blank"
                rel="noreferrer"
                className="an-link"
              >
                {" "}
                https://github.com/prabakaranpkv
              </a>
            </div>
          </Col>
          <Col md={6} className="c-right">
            <p className="c-desc">
              <b>Message Me</b>
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />

              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && "Thank you ..."}
            </form>
          </Col>
        </Row>
      </Element>
    </Container>
  );
};

export default Contact;
