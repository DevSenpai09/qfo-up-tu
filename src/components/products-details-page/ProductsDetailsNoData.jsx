import "../../styles/products-details-page/products-details-no-data.css";

function ProductsDetailsNoData() {
  return (
    <div className="products-details-no-data">
      <img
        src="/src/assets/no-data.svg"
        alt="Image"
        className="products-details-no-data__img"
      />
      <p className="products-details-no-data__text">No data found</p>
    </div>
  );
}

export default ProductsDetailsNoData;
