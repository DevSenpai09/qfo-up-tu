import SuppliersTableContent from "./SuppliersTableContent";
import SuppliersTableHeader from "./SuppliersTableHeader";

const SuppliersTable = () => {
  return (
    <div className="suppliers-table">
      <SuppliersTableHeader />
      <SuppliersTableContent />
    </div>
  );
};

export default SuppliersTable;
