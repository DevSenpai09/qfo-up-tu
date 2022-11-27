import "../styles/search-input.css";

const SearchInput = () => {
  return (
    <label className="search-input">
      <div className="search-input__icon">
        <img src="/src/assets/search.svg" alt="" />
      </div>
      <input type="text" placeholder="Search" className="search-input__input" />
    </label>
  );
};

export default SearchInput;
