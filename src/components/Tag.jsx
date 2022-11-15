import "../styles/Tags.css";

const Tags = ({ active, text }) => {
  return <span className={`tag ${active && "tag--active"}`}>{text}</span>;
};

export default Tags;
