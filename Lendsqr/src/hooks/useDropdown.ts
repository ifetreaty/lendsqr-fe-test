import { useState } from "react";

export default function useDropdown() {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return { dropdownIndex, handleDropdownToggle };
}
