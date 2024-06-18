import CustomCard from "../../../../components/custom/CustomCards/CustomCard";
import "./StatsCard.scss";

interface IStatsCardProps {
  image: string;
  title: string;
  value: number | string;
}

const StatsCard: React.FC<IStatsCardProps> = ({ image, title, value }) => {
  return (
    <CustomCard image={image} title={title}>
      <p className="stats-card__value">{value}</p>
    </CustomCard>
  );
};

export default StatsCard;
