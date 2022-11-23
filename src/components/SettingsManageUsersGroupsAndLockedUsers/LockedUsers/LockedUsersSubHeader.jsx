const LockedUsersSubHeader = () => {
  return (
    <div className="locked-users-sub-header">
      <label className="locked-users-sub-header__input-wrapper">
        <img
          src="/src/assets/search.svg"
          alt="Icon"
          className="locked-users-sub-header__input-icon"
        />
        <input
          type="text"
          placeholder="Search by name, email"
          className="locked-users-sub-header__input"
        />
      </label>
    </div>
  );
};

export default LockedUsersSubHeader;
