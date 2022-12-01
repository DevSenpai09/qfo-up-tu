import { useState } from "react";
import Pagination from "../components/pagination";
import NewSupplier from "../components/Suppliers/NewSupplier";
import SuppliersSubHeader from "../components/Suppliers/SuppliersSubHeader";
import SuppliersTable from "../components/Suppliers/SuppliersTable";
import "../styles/suppliers.css";

const Suppliers = () => {
  const [isNewSupplier, setIsNewSupplier] = useState(true);

  return (
    <div className="suppliers">
      <SuppliersSubHeader
        isNewSupplier={isNewSupplier}
        setIsNewSupplier={setIsNewSupplier}
      />
      {!isNewSupplier ? <SuppliersTable /> : <NewSupplier />}
      {isNewSupplier === false && <Pagination />}
    </div>
  );
};

export default Suppliers;
