import "../styles/FilterDate.css";
// import { MdDateRange } from "react-icons/md";

const Date = ({ title }) => {
  return (
    <label className="date">
      <div>
        <h5 className="date__title">{title}</h5>
        <input type="date" className="date__input" />
      </div>
      {/* <MdDateRange /> */}
    </label>
  );
};

export default Date;
