import { SortingState } from "@tanstack/react-table";
import { useState } from "react";

const useTableData = () => {
  const [rowsData, setRowData] = useState<any>([]);
  const [rowSelection, setRowSelection] = useState<{}>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  return {
    rowsData,
    setRowData,
    rowSelection,
    setRowSelection,
    sorting,
    setSorting,
  };
};

export default useTableData;
