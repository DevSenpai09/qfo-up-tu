import "../../styles/ap-table/index.css";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

const APTable = () => {
  return (
    <div className="ap-table">
      <TableHeader />
      <TableContent />
    </div>
  );
};

export default APTable;
