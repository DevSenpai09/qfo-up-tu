import "../styles/Tags.css";

const Tags = ({ active, text, click }) => {
  return (
    <span
      className={`tag ${active && "tag--active"}`}
      onClick={() => {
        click();
      }}
    >
      {text}
    </span>
  );
};

export default Tags;
