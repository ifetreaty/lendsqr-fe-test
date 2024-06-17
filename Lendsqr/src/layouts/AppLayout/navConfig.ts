import { IconProps } from "../../components/icons/IconProps";
import {
  BadgePercentIcon,
  BankIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ClipboardIcon,
  CoinsIcon,
  GalaxyIcon,
  HandshakeIcon,
  HomeIcon,
  LoanIcon,
  PiggyIcon,
  SackIcon,
  ScrollIcon,
  SlidersIcon,
  TransactionsIcon,
  UserCheckIcon,
  UserCogIcon,
  UserFriendsIcon,
  UserTimesIcon,
  UsersIcon,
} from "../../components/icons/Icons";

type NavConfigType = {
  navGroup: null | string;
  navs: {
    title: string;
    path: string;
    icon: (props: IconProps) => JSX.Element;
  }[];
}[];

const navConfig: NavConfigType = [
  {
    navGroup: null,
    navs: [
      {
        title: "Switch Organization",
        path: "/app/switch-organization",
        icon: BriefcaseIcon,
      },
    ],
  },
  {
    navGroup: null,
    navs: [
      {
        title: "Dashboard",
        path: "/app/dashboard",
        icon: HomeIcon,
      },
    ],
  },
  {
    navGroup: "Customers",
    navs: [
      {
        title: "Users",
        path: "/app/users",
        icon: UserFriendsIcon,
      },
      {
        title: "Guarantors",
        path: "/app/guarantors",
        icon: UsersIcon,
      },
      {
        title: "Loans",
        path: "/app/loans",
        icon: SackIcon,
      },
      {
        title: "Decision Models",
        path: "/app/decision-models",
        icon: HandshakeIcon,
      },
      {
        title: "Savings",
        path: "/app/savings",
        icon: PiggyIcon,
      },
      {
        title: "Loan Requests",
        path: "/app/loan-requests",
        icon: LoanIcon,
      },
      {
        title: "Whitelist",
        path: "/app/whitelist",
        icon: UserCheckIcon,
      },
      {
        title: "Karma",
        path: "/app/karma",
        icon: UserTimesIcon,
      },
    ],
  },
  {
    navGroup: "Businesses",
    navs: [
      {
        title: "Organization",
        path: "/app/organization",
        icon: BriefcaseIcon,
      },
      {
        title: "Loan Products",
        path: "/app/loan-products",
        icon: LoanIcon,
      },
      {
        title: "Savings Products",
        path: "/app/savings-products",
        icon: BankIcon,
      },
      {
        title: "Fees and Charges",
        path: "/app/fees-charges",
        icon: CoinsIcon,
      },
      {
        title: "Transactions",
        path: "/app/transactions",
        icon: TransactionsIcon,
      },
      {
        title: "Services",
        path: "/app/services",
        icon: GalaxyIcon,
      },
      {
        title: "Service Account",
        path: "/app/service-account",
        icon: UserCogIcon,
      },
      {
        title: "Settlements",
        path: "/app/settlements",
        icon: ScrollIcon,
      },
      {
        title: "Reports",
        path: "/app/reports",
        icon: ChartBarIcon,
      },
    ],
  },
  {
    navGroup: "Settings",
    navs: [
      {
        title: "Preferences",
        path: "/app/preferences",
        icon: SlidersIcon,
      },
      {
        title: "Fees and Pricing",
        path: "/app/fees-pricing",
        icon: BadgePercentIcon,
      },
      {
        title: "Audit Logs",
        path: "/app/audit-logs",
        icon: ClipboardIcon,
      },
    ],
  },
];

export default navConfig;
