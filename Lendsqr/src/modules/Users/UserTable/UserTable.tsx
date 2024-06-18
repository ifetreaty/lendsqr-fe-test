import { useEffect, useState } from "react";
import { IUserData } from "../../../types/userData";
import { fetchUserData } from "../../../services/userService";
import { formatDate } from "../../../helpers/utilityFunctions";

import "./UserTable.scss";
import Pagination from "../../../components/custom/CustomPagination/Pagination";
import CustomStatusBadge from "../../../components/custom/CustomStatusBadge/CustomStatusBadge";
import SkeletonLoader from "../../../components/custom/CustomSkeletonLoader/SkeletonLoader";

const rowsPerPage = 10;

export default function UserTable() {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
