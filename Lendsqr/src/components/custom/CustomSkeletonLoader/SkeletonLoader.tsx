import "./SkeletonLoader.scss";

const SkeletonLoader = () => {
  return (
    <tbody>
      {[...Array(10)].map((_, index) => (
        <tr key={index} className="skeleton-row">
          <td className="skeleton-cell">
            <div className="skeleton"></div>
          </td>
          <td className="skeleton-cell">
            <div className="skeleton"></div>
          </td>
          <td className="skeleton-cell">
            <div className="skeleton"></div>
          </td>
          <td className="skeleton-cell">
            <div className="skeleton"></div>
          </td>
          <td className="skeleton-cell">
            <div className="skeleton"></div>
          </td>
          <td className="skeleton-cell">
            <div className="skeleton"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SkeletonLoader;
