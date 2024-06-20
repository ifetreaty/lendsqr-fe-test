import "./SkeletonLoader.scss";

export default function SkeletonLoader({ rows = 10, columns = 6 }) {
  return (
    <>
      {[...Array(rows)].map((_, rowIndex) => (
        <tr key={rowIndex} className="skeleton-row">
          {[...Array(columns)].map((_, colIndex) => (
            <td key={colIndex} className="skeleton-cell">
              <div className="skeleton"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
