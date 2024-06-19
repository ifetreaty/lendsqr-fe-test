import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

import "../styles/UserDetailsPage.scss";
import UserDetailsHeader from "../modules/Users/UserDetails/UserDetailsHeader/UserDetailsHeader";
import UserDetailsTabs from "../modules/Users/UserDetails/UserDetailsTab/UserDetailsTab";
import { useState } from "react";
import UserDetailsSection from "../modules/Users/UserDetails/UserDetailsSection/UserDetailsSection";
import {
  AvatarIcon,
  EmptyStarIcon,
  FilledStarIcon,
} from "../components/icons/UserDetailsIcons";

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
  const accountNumber = selectedUser?.accountNumber;
  const bank = selectedUser?.bank;

  console.log("selected: ", selectedUser);

  return (
    <div className="user-details-page">
      <UserDetailsHeader
        selectedUser={selectedUser}
        onBack={handleBack}
        onBlacklist={handleBlacklistUser}
        onActivate={handleActivateUser}
      />
      <div className="user-info-tabs">
        <div className="basic-info">
          <div className="info">
            <div className="user-details">
              <div className="user-img">
                <AvatarIcon />
              </div>
              <div className="user-name">
                <h3>
                  {selectedUser?.generalDetails?.personalInformation?.fullName}
                </h3>
                <p>{selectedUser?.id}</p>
              </div>
            </div>
            <div className="user-tier">
              <h3>User's Tier</h3>
              <div className="ratings">
                <FilledStarIcon />
                <EmptyStarIcon />
                <EmptyStarIcon />
              </div>
            </div>
            <div className="user-balance">
              {/* <h3>{`₦${Math.ceil(educationEmployment?.loanRepayment * 700).toLocaleString("us-EN")}`}</h3> */}
              <h3>N200,000</h3>
              <p>{`${accountNumber}/${bank}`}</p>
            </div>
          </div>
          <UserDetailsTabs activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
        {activeTab === "general" ? (
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
            </div>
          </div>
        ) : (
          <div className="coming-soon">
            <h3>We see it coming...</h3>
          </div>
        )}
      </div>
    </div>
  );
}
