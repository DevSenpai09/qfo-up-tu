import "../styles/drop-down.css";
import SearchInput from "./search-input";

const DropDown = ({ options, dropDownSearch }) => {
  return (
    <div className="drop-down">
      {dropDownSearch && (
        <div className="drop-down__search-input">
          <SearchInput />
        </div>
      )}
      <div className="drop-down__options">
        {options.map((option) => (
          <div key={option} className="drop-down__option">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
