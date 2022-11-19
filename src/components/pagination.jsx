import SelectInput from "./select-input";
import "../styles/pagination.css";

const Pagination = () => {
  const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div className="pagination">
      <SelectInput
        placeholder="20"
        options={options}
        dropDownPos="up"
        icon={"/src/assets/down.svg"}
      />
      <p className="pagination__text">per page</p>

      <div className="pagination-numbers">
        <img src="/src/assets/arrow-left.svg" alt="Icon" />
        <div className="pagination-numbers__btns">
          <button className="pagination-numbers__btn">1</button>
          <button className="pagination-numbers__btn">2</button>
          <button className="pagination-numbers__btn">3</button>
        </div>
        <img src="/src/assets/arrow-right.svg" alt="Icon" />
      </div>
    </div>
  );
};

export default Pagination;
