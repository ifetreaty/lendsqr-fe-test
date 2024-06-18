import { useUserContext } from "../context/UserContext";

export default function UserDetailsPage() {
  const { selectedUser } = useUserContext();

  if (!selectedUser) {
    return <div>No user selected</div>;
  }

  return (
    <div className="user-information-page">
      <h1>User Information</h1>
    </div>
  );
}
