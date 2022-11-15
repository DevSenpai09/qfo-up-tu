import ProductsSettings from "../components/product-settings";

const Products = () => {
  return (
    <>
      <h1>Products Components</h1>
      <div
        style={{
          display: "grid",
          justifyContent: "left",
          justifyItems: "left",
          gap: "30px",
        }}
      >
        <ProductsSettings />
      </div>
    </>
  );
};

export default Products;
