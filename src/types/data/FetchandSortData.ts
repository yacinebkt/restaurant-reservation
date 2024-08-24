import { RowSelectionState } from "@tanstack/react-table";
import React from "react";

export type TtableData = {
  rowsData?: any[];
  setRowData: React.Dispatch<React.SetStateAction<any[]>>;
  rowSelection: RowSelectionState;
  setRowSelection: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  sorting: any[];
  setSorting: React.Dispatch<React.SetStateAction<any[]>>;
};
