import "./UserDetailsTab.scss";

interface IUserDetailsTabsProps {
  activeTab: string;
  onTabClick: (tabName: string) => void;
}

export default function UserDetailsTabs({
  activeTab,
  onTabClick,
}: IUserDetailsTabsProps) {
  const tabs = [
    { name: "general", label: "General Details" },
    { name: "documents", label: "Documents" },
    { name: "bankDetails", label: "Bank Details" },
    { name: "loans", label: "Loans" },
    { name: "savings", label: "Savings" },
    { name: "appAndSystem", label: "App and System" },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`tab ${activeTab === tab.name ? "active" : ""}`}
          onClick={() => onTabClick(tab.name)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
