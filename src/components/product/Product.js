import "./product.css";
import swal from "sweetalert";

const Product = ({ img, link, pname, srclink, des }) => {
  const desc = () => {
    swal(des);
  };

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-name">{pname}</div>
        <button className="p-butt" onClick={desc}>
          Description
        </button>
        <a href={srclink} target="_blank" rel="noreferrer">
          <button className="p-butt">Source code</button>
        </a>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="product" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
