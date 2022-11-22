import { useState } from "react";
import CheckBox from "../../CheckBox";
import GroupsEditGroup from "./GroupsEditGroup";

const GroupsTableContent = () => {
  const [isEdit, setIsEdit] = useState(false);
  const groups = [
    { group: "1" },
    { group: "2" },
    { group: "3" },
    { group: "4" },
    { group: "5" },
    { group: "6" },
    { group: "7" },
    { group: "8" },
    { group: "9" },
    { group: "10" },
  ];
  return (
    <div>
      {groups.map((group) => (
        <div key={Math.random()} className="groups-table-content__row">
          <div className="groups-table-row">
            <CheckBox />
            <div className="groups-table-row__data groups-table-row-content__data">
              Group {group.group}
            </div>
          </div>
          <div className="groups-table-content__icons">
            <img src="/src/assets/green-right-arrow.svg" alt="Icons" />
            <img
              src="/src/assets/edit.svg"
              alt="Icons"
              onClick={() => setIsEdit(!isEdit)}
            />
            <img src="/src/assets/bin.svg" alt="Icons" />
          </div>
        </div>
      ))}
      {isEdit && <GroupsEditGroup isEdit={isEdit} setIsEdit={setIsEdit} />}
    </div>
  );
};

export default GroupsTableContent;
