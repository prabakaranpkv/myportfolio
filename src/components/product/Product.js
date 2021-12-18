import "./product.css";

const Product = ({ img, link, pname, srclink1, srclink2, des }) => {
  return (
    <div className="p">
      {/* <div className="p-browser">
        <div className="p-name">{pname}</div>
        <button className="p-butt" onClick={desc}>
          Description
        </button>
        <a href={srclink} target="_blank" rel="noreferrer">
          <button className="p-butt">Source code</button>
        </a>
      </div> */}

      <img src={img} alt="product" className="p-img" />
      <div className="p-cont">
        <div className="p-name">{pname}</div>
        <div className="p-desc">{des}</div>
        <div className="p-butt-group">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="p-butt">Visit App</button>
          </a>
          <a href={srclink1} target="_blank" rel="noreferrer">
            <button className="p-butt">Source Frontend</button>
          </a>
          <a href={srclink2} target="_blank" rel="noreferrer">
            <button className="p-butt">Source Backend</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
