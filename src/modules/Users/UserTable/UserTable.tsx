import { useState } from "react";

import { formatDate } from "../../../helpers/utilityFunctions";

import "./UserTable.scss";
import Pagination from "../../../components/custom/CustomPagination/Pagination";
import CustomStatusBadge from "../../../components/custom/CustomStatusBadge/CustomStatusBadge";
import SkeletonLoader from "../../../components/custom/CustomSkeletonLoader/SkeletonLoader";
import useUserData from "../../../hooks/useUserData";
import useDropdown from "../../../hooks/useDropdown";
import {
  FilterIcon,
  MoreDetailsIcon,
} from "../../../components/icons/UserTableIcons";
import DropdownMenu from "./ActionsMenu/DropdownMenu";
import FilterDropdownMenu from "./FilterDropdownMenu/FilterDropdownMenu";

import NotepadImg from "../../../assets/notepad-img.svg";

const rowsPerPage = 10;

export default function UserTable() {
  const { userData, loading, error } = useUserData();
  const [currentPage, setCurrentPage] = useState(1);
  const { dropdownIndex, handleDropdownToggle } = useDropdown();
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });

  const [filterDropdownVisible, setFilterDropdownVisible] = useState<
    string | null
  >(null);

  const handleFilterChange = (column: string, value: string) => {
    setFilters((prev) => ({ ...prev, [column]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      dateJoined: "",
      status: "",
    });
  };

  const handleFilter = () => {
    setFilterDropdownVisible(null);
  };

  const filteredData = userData.filter((user) => {
    return Object.keys(filters).every((key) => {
      const filterValue = filters[key as keyof typeof filters];
      const userValue = user[key as keyof typeof user];

      if (!filterValue) return true;

      if (typeof userValue === "string") {
        return userValue.toLowerCase().includes(filterValue.toLowerCase());
      } else if (typeof userValue === "number") {
        return userValue.toString().includes(filterValue);
      } else if (userValue instanceof Date) {
        return userValue.toISOString().includes(filterValue);
      }

      return true;
    });
  });

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              {[
                "organization",
                "username",
                "email",
                "phoneNumber",
                "dateJoined",
                "status",
              ].map((header) => (
                <th key={header}>
                  <div className="header-container">
                    <span>
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                    </span>
                    <FilterIcon
                      className="filter-icon"
                      onClick={() =>
                        setFilterDropdownVisible(
                          filterDropdownVisible === header ? null : header
                        )
                      }
                    />
                  </div>
                  {filterDropdownVisible === header && (
                    <FilterDropdownMenu
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onFilter={handleFilter}
                      onReset={handleResetFilters}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <SkeletonLoader rows={rowsPerPage} columns={7} />
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan={7} className="no-records-found">
                  <img
                    src={NotepadImg}
                    alt="No records"
                    className="no-records-image"
                  />
                  <p className="no-records-text">No Records Found</p>
                </td>
              </tr>
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
                      {dropdownIndex === index && <DropdownMenu user={user} />}
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
