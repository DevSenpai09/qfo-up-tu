import TextInput from "../../inputs/text-input";
import Button from "../../Button";

const GroupsEditGroup = ({ isEdit, setIsEdit }) => {
  return (
    <div className="groups-edit-user">
      <form action="" className="groups-edit-user__form">
        <div className="groups-edit-user__form__header">
          <h4 className="groups-edit-user__form__title">Edit Group</h4>
          <img
            src="/src/assets/close.svg"
            alt="Icon"
            onClick={() => setIsEdit(!isEdit)}
            className="groups-edit-user__form__close"
          />
        </div>
        <TextInput placeholder="Name" title="Group" id="group" />
        <Button text="Save" primary />
      </form>
    </div>
  );
};

export default GroupsEditGroup;
