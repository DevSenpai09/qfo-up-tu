import SelectInput from "../../components/select-input";

const BrandSelect = () => {
  const options = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
    "Brand 7",
    "Brand 8",
    "Brand 9",
    "Brand 10",
  ];
  return (
    <SelectInput
      placeholder="Select Brand"
      options={options}
      dropDownPos="down"
      dropDownSearch
    />
  );
};

export default BrandSelect;
