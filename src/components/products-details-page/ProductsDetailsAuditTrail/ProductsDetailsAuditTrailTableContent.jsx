const ProductsDetailsAuditTrailTableContent = () => {
  const schema = [
    {
      user: "Eva Wang",
      notification: "Created product with status shipped",
      date: "Aug 26. 2022 12:31:25 PM",
    },
    {
      user: "John Doe",
      notification: "Updated Product",
      date: "Aug 26. 2022 12:31:25 PM",
    },
    {
      user: "John Doe",
      notification: "Status update from customer returned to waiting test",
      date: "Aug 26. 2022 12:31:25 PM",
    },
    {
      user: "John Doe",
      notification: "Sent to Auction",
      date: "Aug 26. 2022 12:31:25 PM",
    },
  ];
  return (
    <>
      {schema.map((audit) => (
        <div className="products-details-audit-trail-table-content products-details-audit-trail-table-row">
          <div className="products-details-audit-trail-table-content__data">
            {audit.user}
          </div>
          <div className="products-details-audit-trail-table-content__data">
            {audit.notification}
          </div>
          <div className="products-details-audit-trail-table-content__data">
            {audit.date}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsDetailsAuditTrailTableContent;
