import Button from "../Button";
import "../../styles/products-page/product-archive.css";
import { useState } from "react";

const ProductArchive = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div className="product-archive">
      <div
        className="product-archive__toggle"
        onClick={() => setIsShowForm(!isShowForm)}
      >
        <img src="/src/assets/archived.svg" alt="Icon" /> Archive
      </div>
      {isShowForm && (
        <div className="product-archive__form-bg">
          <form className="product-archive__form">
            <div className="product-archive__form__header">
              <p className="product-archive__form__header-text">
                Are you sure wan to archive this product?
              </p>
              <img
                src="/src/assets/close.svg"
                alt="Icon"
                className="product-archive__form__close"
                onClick={() => setIsShowForm(!isShowForm)}
              />
            </div>
            <p className="product-archive__serial">
              IMEI/Serial: 12345678901234
            </p>
            <div className="product-archive__reason">
              <h4 className="product-archive__reason-title">Archive Reason*</h4>
              <textarea
                className="product-archive__reason-input"
                placeholder="Archive reason"
              ></textarea>
            </div>

            <div className="product-archive__form-btn">
              <Button text="Confirm" primary />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductArchive;
