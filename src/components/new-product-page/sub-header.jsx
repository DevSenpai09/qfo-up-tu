import SubHeaderCSS from "../../styles/new-product-page/sub-header.module.css";
import Button from "../Button";

const SubHeader = () => {
  return (
    <div className={SubHeaderCSS.sub_header}>
      <Button text="Save" primary />
    </div>
  );
};

export default SubHeader;
