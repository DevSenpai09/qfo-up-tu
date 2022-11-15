import SelectInput from "../../components/select-input";

const PaginationSelect = () => {
  const options = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  return (
    <SelectInput
      placeholder="20"
      options={options}
      dropDownPos="up"
      //   dropDownSearch
    />
  );
};

export default PaginationSelect;
