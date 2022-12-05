import Button from "../../Button";

const ProductsDetailsAddComments = () => {
  return (
    <div className="products-details-module__bg">
      <form className="products-details-module__form" action="">
        <div className="products-details-module__header">
          <h4 className="products-details-module__title">Add Comment</h4>
          <img src="/src/assets/close.svg" alt="Icon" />
        </div>
        <div className="products-details-module__input-wrapper">
          <label className="products-details-module__input-label">
            Comment
          </label>
          <textarea
            className="products-details-module__input"
            placeholder="Comment"
          ></textarea>
        </div>
        <Button text="Save" primary />
      </form>
    </div>
  );
};

export default ProductsDetailsAddComments;
