import {
  ActivateUserIcon,
  DeleteFriendIcon,
  EyeOpenIcon,
} from "../../../../components/icons/UserTableIcons";

import "./DropdownMenu.scss";

export default function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <EyeOpenIcon />
        <span>View Details</span>
      </div>
      <div className="dropdown-item">
        <DeleteFriendIcon />
        <span>Blacklist User</span>
      </div>
      <div className="dropdown-item">
        <ActivateUserIcon />
        <span>Activate User</span>
      </div>
    </div>
  );
}
