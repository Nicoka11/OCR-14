import { Employee } from "@src/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEmployeeStore } from "@src/stores";
import { Table, TBody, Td, Th, THead, Tr } from "./TableElements";
import { Container, Stack, Text } from "@src/components/BaseElements";
import { useState } from "react";
import { Input, Option } from "@src/components/Input";
import { ChevronLeft, ChevronRight } from "@src/icons/Chevron";
import { IconButton } from "@src/components/Buttons";

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (data) => data.getValue(),
    header: () => <span>First Name</span>,
  }),
  columnHelper.accessor("lastName", {
    cell: (data) => data.getValue(),
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("startDate", {
    cell: (data) => data.getValue(),
    header: () => <span>Start Date</span>,
  }),
  columnHelper.accessor("department", {
    cell: (data) => data.getValue(),
    header: () => <span>Department</span>,
  }),
  columnHelper.accessor("birthDate", {
    cell: (data) => data.getValue(),
    header: () => <span>Date of birth</span>,
  }),
  columnHelper.accessor("street", {
    cell: (data) => data.getValue(),
    header: () => <span>Street</span>,
  }),
  columnHelper.accessor("city", {
    cell: (data) => data.getValue(),
    header: () => <span>City</span>,
  }),
  columnHelper.accessor("state", {
    cell: (data) => data.getValue(),
    header: () => <span>State</span>,
  }),
  columnHelper.accessor("zipCode", {
    cell: (data) => data.getValue(),
    header: () => <span>ZipCode</span>,
  }),
];

const showAmounts = [10, 25, 50, 100];

const EmployeeTable = () => {
  const employees: Employee[] = useEmployeeStore((state) => state.employees);
  const [data, setData] = useState(employees);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const min =
    table.getState().pagination.pageIndex *
    table.getState().pagination.pageSize;

  const range = min + table.getState().pagination.pageSize;
  const max = range > employees.length ? employees.length : range;

  return (
    <Container>
      <Stack space css={{ marginBottom: "$6" }}>
        <Stack align css={{ gap: "$2" }}>
          Show{" "}
          <Input
            as="select"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {showAmounts.map((amount, i) => (
              <Option value={amount} key={i}>
                {amount}
              </Option>
            ))}
          </Input>
          entries
        </Stack>
        <Stack align css={{ gap: "$2" }}>
          <p>Search</p>
          <Input />
        </Stack>
      </Stack>
      <Table>
        <THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </tr>
          ))}
        </THead>
        <TBody>
          {table.getRowModel().rows.map((row, index) => (
            <Tr lightBg={Boolean(index % 2)} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </TBody>
      </Table>
      <Stack space css={{ marginTop: "$8" }}>
        <Text>
          Showing {min} to {max} of {employees.length} entries
        </Text>
        <Stack align css={{ gap: "$3" }}>
          <IconButton
            variant="ghost"
            onClick={() => table.previousPage()}
            visible={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </IconButton>
          <Text>
            {table.getState().pagination.pageIndex + 1} - {table.getPageCount()}
          </Text>
          <IconButton
            variant="ghost"
            onClick={() => table.nextPage()}
            visible={!table.getCanNextPage()}
          >
            <ChevronRight />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default EmployeeTable;
