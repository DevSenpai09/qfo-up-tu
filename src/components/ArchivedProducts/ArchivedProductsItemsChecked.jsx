const ArchivedProductsItemsChecked = () => {
  return (
    <div className="archived-products-items-checked">
      <p className="archived-products-items-checked__text">1 item checked</p>
      <div className="archived-products-items-checked__unarchive">
        <img src="/src/assets/unarchived.svg" alt="Icon" />
        <p className="archived-products-items-checked__unarchive__text">
          Unarchive
        </p>
      </div>
      <img src="/src/assets/bin.svg" alt="Icon" />
    </div>
  );
};

export default ArchivedProductsItemsChecked;
