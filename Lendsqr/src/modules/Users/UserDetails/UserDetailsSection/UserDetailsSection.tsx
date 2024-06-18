import { TDetailsData } from "../../../../types/generalDetails";
import "./UserDetailsSection.scss";

interface IUserDetailsSectionProps {
  title: string;
  data: TDetailsData;
}

export default function UserDetailsSection({
  title,
  data,
}: IUserDetailsSectionProps) {
  return (
    <div className="user-details-section">
      <h3>{title}</h3>
      <div className="details-content">
        {Object.entries(data).map(([key, value]) => {
          const formattedKey = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())
            .trim();

          return (
            <div className="details-row" key={key}>
              <span className="details-key">{formattedKey}:</span>
              <span className="details-value">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
