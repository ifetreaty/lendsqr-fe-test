import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

import "../styles/UserDetailsPage.scss";
import UserDetailsHeader from "../modules/Users/UserDetails/UserDetailsHeader/UserDetailsHeader";
import UserDetailsTabs from "../modules/Users/UserDetails/UserDetailsTab/UserDetailsTab";
import { useState } from "react";
import UserDetailsSection from "../modules/Users/UserDetails/UserDetailsSection/UserDetailsSection";

export default function UserDetailsPage() {
  const { selectedUser } = useUserContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("general");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleBack = () => {
    navigate("/app/users");
  };

  const handleBlacklistUser = () => {
    console.log("Blacklisting user:", selectedUser?.username);
  };

  const handleActivateUser = () => {
    console.log("Activating user:", selectedUser?.username);
  };

  if (!selectedUser) {
    return <div>No user selected</div>;
  }

  const { generalDetails } = selectedUser;
  const personalInformation = generalDetails?.personalInformation;
  const educationEmployment = generalDetails?.educationAndEmployment;
  const socials = generalDetails?.socialsData;
  const guarantor = generalDetails?.guarantorInformation;

  return (
    <div className="user-details-page">
      <UserDetailsHeader
        selectedUser={selectedUser}
        onBack={handleBack}
        onBlacklist={handleBlacklistUser}
        onActivate={handleActivateUser}
      />
      <div className="user-info-tabs">
        <div className="user-info">
          <h2>{selectedUser?.generalDetails?.personalInformation?.fullName}</h2>
        </div>
        <UserDetailsTabs activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="user-details-container">
        <div className="user-details-sections">
          {personalInformation && (
            <UserDetailsSection
              title="Personal Information"
              data={personalInformation}
            />
          )}
          {educationEmployment && (
            <UserDetailsSection
              title="Education and Employment"
              data={educationEmployment}
            />
          )}
          {socials && <UserDetailsSection title="Socials" data={socials} />}
          {guarantor && (
            <UserDetailsSection title="Guarantor" data={guarantor} />
          )}
          {guarantor && <UserDetailsSection title=" " data={guarantor} />}
        </div>
      </div>
    </div>
  );
}
