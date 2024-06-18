import BusinessStats from "../modules/Users/BusinessStats/BusinessStats";
import UserTable from "../modules/Users/UserTable/UserTable";
import "../styles/UsersPage.scss";

export default function UsersPage() {
  return (
    <div className="users-page">
      <h1>Users</h1>
      <BusinessStats />
      <UserTable />
    </div>
  );
}
