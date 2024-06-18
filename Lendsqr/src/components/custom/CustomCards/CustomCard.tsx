import "./CustomCard.scss";

interface ICustomCardProps {
  image: string;
  title: string;
  children: React.ReactNode;
}

const CustomCard: React.FC<ICustomCardProps> = ({ image, title, children }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
