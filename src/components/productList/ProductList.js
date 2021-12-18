import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <Container>
      <Element id="projects">
        <Row className="pl">
          <Col className="pl-col">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-desc">Here are some projects which I done</p>

            <div className="pl-list">
              {products.map((item) => (
                <Product
                  key={item.id}
                  img={item.img}
                  link={item.link}
                  pname={item.name}
                  srclink1={item.source1}
                  srclink2={item.source2}
                  des={item.description}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Element>
    </Container>
  );
};

export default ProductList;
