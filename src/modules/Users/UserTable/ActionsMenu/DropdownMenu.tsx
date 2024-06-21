import { useNavigate } from "react-router-dom";
import {
  ActivateUserIcon,
  DeleteFriendIcon,
  EyeOpenIcon,
} from "../../../../components/icons/UserTableIcons";
import { IUserData } from "../../../../types/userData";

import "./DropdownMenu.scss";
import { useUserContext } from "../../../../context/UserContext";

interface IDropdownMenuProps {
  user: IUserData;
}

export default function DropdownMenu({ user }: IDropdownMenuProps) {
  const navigate = useNavigate();
  const { setSelectedUser } = useUserContext();

  const handleViewMore = () => {
    setSelectedUser(user);
    navigate("/app/user/user-details");
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-item" onClick={handleViewMore}>
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
