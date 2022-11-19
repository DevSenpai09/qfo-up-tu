import "../styles/ToolTip.css";

const ToolTip = ({ unread }) => {
  return (
    <div className="tool-tip">
      <p className="tool-tip__text">You have {unread} unread messages!</p>
    </div>
  );
};

export default ToolTip;
