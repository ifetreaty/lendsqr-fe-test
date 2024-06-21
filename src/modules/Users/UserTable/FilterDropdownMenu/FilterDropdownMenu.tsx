import { useState } from "react";
import "./FilterDropdownMenu.scss";
import { formatKeyAsTitleCase } from "../../../../helpers/utilityFunctions";

interface IFilterDropdownMenuProps {
  filters: Record<string, string>;
  onFilterChange: (column: string, value: string) => void;
  onFilter: () => void;
  onReset: () => void;
}

export default function FilterDropdownMenu({
  filters,
  onFilterChange,
  onFilter,
  onReset,
}: IFilterDropdownMenuProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (column: string, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [column]: value }));
  };

  const handleFilter = () => {
    Object.keys(localFilters).forEach((key) => {
      onFilterChange(key, localFilters[key]);
    });
    onFilter();
  };

  const handleReset = () => {
    setLocalFilters({});
    onReset();
  };

  return (
    <div className="filter-dropdown">
      {Object.keys(filters).map((column) => (
        <div key={column} className="filter-dropdown-item">
          <label>{formatKeyAsTitleCase(column)}</label>
          <input
            type="text"
            value={localFilters[column] || ""}
            onChange={(e) => handleInputChange(column, e.target.value)}
            placeholder={formatKeyAsTitleCase(column)}
          />
        </div>
      ))}
      <div className="filter-dropdown-actions">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleFilter}>Filter</button>
      </div>
    </div>
  );
}
