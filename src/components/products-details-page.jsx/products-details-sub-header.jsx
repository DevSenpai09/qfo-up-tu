import "../../styles/products-details-page/products-details-sub-header.css";
import Button from "../Button";

const ProductsDeatilsSubHeader = () => {
  return (
    <div className="products-details-sub-header">
      <Button text="+ New Comment" secondary />
      <Button text="Change Status|User" secondary />
      <Button text="Save" primary />
    </div>
  );
};

export default ProductsDeatilsSubHeader;
