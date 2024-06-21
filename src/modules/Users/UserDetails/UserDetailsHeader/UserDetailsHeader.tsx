import { BackArrowIcon } from "../../../../components/icons/UserDetailsIcons";
import { IUserData } from "../../../../types/userData";

import "./UserDetailsHeader.scss";

interface IUserDetailsHeaderProps {
  selectedUser: IUserData;
  onBack: () => void;
  onBlacklist: () => void;
  onActivate: () => void;
}

export default function UserDetailsHeader({
  onBack,
  onBlacklist,
  onActivate,
}: IUserDetailsHeaderProps) {
  return (
    <div className="user-details-header-page">
      <div className="back-to-users" onClick={onBack}>
        <BackArrowIcon />
        <span>Back to Users</span>
      </div>
      <div className="user-details-header">
        <h1>User Details</h1>
        <div className="action-buttons">
          <button className="blacklist-button" onClick={onBlacklist}>
            Blacklist User
          </button>
          <button className="activate-button" onClick={onActivate}>
            Activate User
          </button>
        </div>
      </div>
    </div>
  );
}
