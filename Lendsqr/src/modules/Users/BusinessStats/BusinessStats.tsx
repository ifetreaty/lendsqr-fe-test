import { mockUserStats } from "../../../__mocks__/userStats";
import StatsCard from "./StatsCard/StatsCard";
import totalUsersIcon from "../../../assets/total-users-icons.svg";
import activeUsersIcon from "../../../assets/active-users-icon.svg";
import loanUsersIcon from "../../../assets/loan-users-icon.svg";
import savingsUsersIcon from "../../../assets/savings-users-icon.svg";

import "./BusinessStats.scss";
import { formatNumberWithThousandSeparators } from "../../../helpers/utilityFunctions";

export default function BusinessStats() {
  const stats = [
    {
      title: "Total Users",
      value: mockUserStats.totalUsers,
      image: totalUsersIcon,
    },
    {
      title: "Active Users",
      value: mockUserStats.activeUsers,
      image: activeUsersIcon,
    },
    {
      title: "Users with Loans",
      value: mockUserStats.usersWithLoans,
      image: loanUsersIcon,
    },
    {
      title: "Users with Savings",
      value: mockUserStats.usersWithSavings,
      image: savingsUsersIcon,
    },
  ];

  return (
    <div className="business-stats">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          image={stat.image}
          title={stat.title}
          value={formatNumberWithThousandSeparators(stat.value)}
        />
      ))}
    </div>
  );
}
