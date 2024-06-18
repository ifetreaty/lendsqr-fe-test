import { useState } from "react";

import { formatDate } from "../../../helpers/utilityFunctions";

import "./UserTable.scss";
import Pagination from "../../../components/custom/CustomPagination/Pagination";
import CustomStatusBadge from "../../../components/custom/CustomStatusBadge/CustomStatusBadge";
import SkeletonLoader from "../../../components/custom/CustomSkeletonLoader/SkeletonLoader";
import useUserData from "../../../hooks/useUserData";
import useDropdown from "../../../hooks/useDropdown";
import { MoreDetailsIcon } from "../../../components/icons/UserTableIcons";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

const rowsPerPage = 10;

export default function UserTable() {
  const { userData, loading, error } = useUserData();
  const [currentPage, setCurrentPage] = useState(1);
  const { dropdownIndex, handleDropdownToggle } = useDropdown();

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = userData.slice(indexOfFirstItem, indexOfLastItem);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date Joined</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <SkeletonLoader />
            ) : (
              currentData.map((user, index) => (
                <tr key={index}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.dateJoined ? formatDate(user.dateJoined) : ""}</td>
                  <td>
                    <CustomStatusBadge variant={user.status}>
                      {user.status}
                    </CustomStatusBadge>
                  </td>
                  <td>
                    <div className="action-container">
                      <MoreDetailsIcon
                        onClick={() => handleDropdownToggle(index)}
                      />
                      {dropdownIndex === index && <DropdownMenu />}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        totalItems={userData.length}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
