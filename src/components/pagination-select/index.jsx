import SelectInput from "../../components/select-input";
import "../../styles/pagination-select/index.css";

const PaginationSelect = () => {
  const options = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  return (
    <div className="pagination-select">
      <SelectInput
        placeholder="20"
        options={options}
        dropDownPos="up"
        //   dropDownSearch
      />
      <p className="pagination-select__text">per page</p>
    </div>
  );
};

export default PaginationSelect;
