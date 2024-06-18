import "./CustomStatusBadge.scss";

interface CustomStatusBadgeProps {
  variant?: "blacklisted" | "inactive" | "active" | "pending";
  children: React.ReactNode;
}

export default function CustomStatusBadge({
  variant,
  children,
}: CustomStatusBadgeProps) {
  return <span className={`custom-status-badge ${variant}`}>{children}</span>;
}
