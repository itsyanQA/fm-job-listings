import { useState } from "react";

export const useJobFilter = () => {
  const [filteredTools, setFilteredTools] = useState<string[]>([]);

  return {
    filteredTools,
    setFilteredTools,
  };
};
