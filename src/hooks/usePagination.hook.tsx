// usePagination.tsx
import { useState, useMemo, useEffect } from "react";
import { PaginationState } from "@tanstack/react-table";

interface UsePaginationOptions {
  initialPageIndex?: number;
  initialPageSize?: number;
  resetPagination?: any[];
}

const usePagination = ({
  initialPageIndex = 0,
  initialPageSize = 10,
  resetPagination,
}: UsePaginationOptions = {}) => {
  
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const resetPagenation = () => {
    setPagination({
      pageIndex: initialPageIndex,
      pageSize: initialPageSize,
    });
  };

  useEffect(() => {
    resetPagenation();
  }, resetPagination);

  return { pageIndex, pageSize, pagination, setPagination, resetPagenation };
};

export default usePagination;
