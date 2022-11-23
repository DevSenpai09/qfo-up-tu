import { useState } from "react";
import Button from "../../Button";
import AlertBox from "../../AlertBox";

const LockedUsersUnlockUser = () => {
  const [isUnlock, setIsUnlock] = useState(false);
  return (
    <>
      <img
        src="/src/assets/unlock.svg"
        alt="Icon"
        onClick={() => setIsUnlock(!isUnlock)}
      />
      {isUnlock && (
        <div className="locked-users-unlock-user">
          <form action="" className="locked-users-unlock-user__form">
            <p>Are you sure want to unlock user : Eva Wang?</p>
            <Button text="cancel" secondary />
            <Button text="confirm" primary />
          </form>
        </div>
      )}
    </>
  );
};

export default LockedUsersUnlockUser;
