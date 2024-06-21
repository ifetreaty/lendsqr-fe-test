import { useEffect, useRef, useState } from "react";

import { filterUserData, formatDate } from "../../../helpers/utilityFunctions";

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

const initialFilters = {
  organization: "",
  username: "",
  email: "",
  phoneNumber: "",
  dateJoined: "",
  status: "",
};

export default function UserTable() {
  const { userData, loading, error } = useUserData();
  const [currentPage, setCurrentPage] = useState(1);
  const { dropdownIndex, handleDropdownToggle } = useDropdown();
  const [filters, setFilters] = useState(initialFilters);

  const [filterDropdownVisible, setFilterDropdownVisible] = useState<
    string | null
  >(null);

  const filterDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleFilterChange = (column: string, value: string) => {
    setFilters((prev) => ({ ...prev, [column]: value }));
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setFilterDropdownVisible(null);
  };

  const handleFilter = () => {
    setFilterDropdownVisible(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setFilterDropdownVisible(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredData = filterUserData(userData, filters);

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
                    <div ref={filterDropdownRef}>
                      <FilterDropdownMenu
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onFilter={handleFilter}
                        onReset={handleResetFilters}
                      />
                    </div>
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
