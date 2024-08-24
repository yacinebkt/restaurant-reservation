import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  VisibilityState,
  PaginationState,
  ColumnResizeMode,
} from '@tanstack/react-table';
import { Box, Pagination, Typography } from '@mui/material';
import { TtableData } from '@/types/data/FetchandSortData';
import { useTranslation } from 'react-i18next';
import SkeletonTable from './Skeleton';
import emptyModalImage from '@/assets/images/table/empty-table-data.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import './styles.css';

type TableProps = {
  columns: any[];
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
  loading: boolean;
  totalCount?: number;
  tableData: TtableData;
  getRowDataId?: (data: any) => string;
  onClickRow?: (id: string) => void;
  withCountRowSelection?: boolean;
};

interface Pagination {
  pageIndex: number;
  pageSize: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  pagination,
  setPagination,
  totalCount,
  loading,
  tableData,
  getRowDataId,
  onClickRow,
}) => {
  const { t } = useTranslation();

  const [columnResizeMode] = React.useState<ColumnResizeMode>('onChange');

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: tableData.rowsData ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode,
    getSortedRowModel: getSortedRowModel(),
    pageCount: totalCount ? Math.ceil(totalCount / pagination?.pageSize) + 1 : -1,
    state: {
      sorting: tableData.sorting,
      columnVisibility,
      rowSelection: tableData.rowSelection,
      pagination,
    },
    onSortingChange: tableData.setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: tableData.setRowSelection,
    getRowId: (originalRow: any, index: number, parent?: any) =>
      getRowDataId ? getRowDataId(originalRow) : originalRow.id,
    onPaginationChange: setPagination,
    manualPagination: true,
    manualSorting: true,

    meta: {
      updateData: (rowIndex: any, columnId: any, value: any) => {
        tableData.setRowData((old: any) =>
          old.map((row: any, index: any) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
                isEdited: true,
              };
            }
            return row;
          })
        );
      },

      removeRow: (rowIndex: number) => {
        tableData.setRowData((old: any) =>
          old.filter((_row: any, index: number) => index !== rowIndex)
        );
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    table.setPageIndex(value - 1);
    event;
  };

  return (
    <Box className="relative flex flex-col gap-4 ">
      {loading ? (
        <SkeletonTable />
      ) : (
        <Box
          className="table-container custom-scrollbar-table relative w-full
          border rounded-xl z-20
          "
          style={{
            minHeight: loading || !tableData?.rowsData?.length ? '300px' : 0,
          }}
        >
          {loading ? (
            <Box className="flex  w-full h-full justify-center items-center absolute bg-[rgba(1,1,1,.01)] z-[9999]">
              <Box className=" w-12 h-12 rounded-full animate-spin border-8 border-dashed  border-t-transparent duration-[2s]"></Box>
            </Box>
          ) : (
            <></>
          )}

          {tableData?.rowsData?.length === 0 ? (
            <Box
              className="flex w-full h-full justify-center items-center absolute bg-[rgba(1,1,1,.01)] z-[99]
            left-0 right-0 top-0
            "
            >
              <Box className="flex flex-col gap-2 items-center justify-center">
                <img src={emptyModalImage} className="block  w-[150px] object-contain h-full" />
                <Typography className="text-lg font-bold opacity-50 font-Poppins">
                  {t('No Data !')}
                </Typography>
              </Box>
            </Box>
          ) : (
            <></>
          )}

          <table
            className="table-all w-full overflow-x-scroll"
            {...{
              style: {
                minWidth: table.getCenterTotalSize(),
              },
            }}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{
                        zIndex: pagination?.pageSize + 10,
                        cursor: header.column.getCanSort() ? 'pointer' : '',
                        minWidth: header.getSize() + 50,
                      }}
                      colSpan={header.colSpan}
                      className="relative"
                    >
                      <Box className="flex flex-wrap gap-2 h-full items-center opacity-70 text-[14px]">
                        <Box>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                typeof header.column.columnDef.header === 'string'
                                  ? t(header.column.columnDef.header)
                                  : header.column.columnDef.header,
                                header.getContext()
                              )}
                        </Box>

                        {/* column ordering */}
                        {(header.column.getIsSorted() as string) ? (
                          ''
                        ) : header.column.getCanSort() ? (
                          <Box className="flex flex-col gap-0 w-[20px]">
                            <ArrowDropUpIcon
                              className="p-0 m-0"
                              sx={{
                                color: '#bbb',
                              }}
                            />
                            <ArrowDropDownIcon
                              className="p-0 m-0 -mt-[16px]"
                              sx={{
                                color: '#bbb',
                              }}
                            />
                          </Box>
                        ) : (
                          ''
                        )}

                        {{
                          asc: (
                            <Box className="flex flex-col gap-0 w-[20px]" style={{}}>
                              <ArrowDropUpIcon
                                className="p-0 m-0"
                                sx={{
                                  color: '#000',
                                }}
                              />
                              <ArrowDropDownIcon
                                className="p-0 m-0 -mt-[16px]"
                                sx={{
                                  color: '#bbb',
                                }}
                              />
                            </Box>
                          ),
                          desc: (
                            <Box className="flex flex-col gap-0 w-[20px]">
                              <ArrowDropUpIcon
                                className="p-0 m-0"
                                sx={{
                                  color: '#bbb',
                                }}
                              />
                              <ArrowDropDownIcon
                                className="p-0 m-0 -mt-[16px]"
                                sx={{
                                  color: '#000',
                                }}
                              />
                            </Box>
                          ),
                        }[header.column.getIsSorted() as string] ?? null}

                        {/* End column ordering  */}
                      </Box>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="">
              {table.getRowModel().rows.map((row, trKey) => (
                <tr
                  key={row.id}
                  className={`relative 
                  ${onClickRow ? 'cursor-pointer' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickRow && onClickRow(row.id);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{
                        zIndex: pagination?.pageSize + 100 - trKey + 1,
                        width: cell.column?.getSize() !== 150 ? cell.column?.getSize() : undefined,
                        minWidth: cell.column?.getSize() !== 150 ? cell.column?.getSize() : 140,
                        fontSize: '14px',
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      )}

      <Box className="flex justify-end W-full mt-6">
        <Box className="flex justify-end w-full mb-2 tex">
          <Pagination
            count={table.getPageCount() - 1}
            page={table.getState().pagination.pageIndex + 1}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            boundaryCount={1}
          />{' '}
        </Box>
      </Box>
    </Box>
  );
};

export default Table;
