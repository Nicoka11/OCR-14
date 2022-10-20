import { Employee } from "@src/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
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

enum ShowAmounts {
  LOW = 10,
  MID = 25,
  HIGH = 100,
}

const EmployeeTable = () => {
  const employees: Employee[] = useEmployeeStore((state) => state.employees);
  const [data, setData] = useState(employees);
  const [showAmount, setShowAmount] = useState<ShowAmounts>(ShowAmounts.LOW);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <Stack space css={{ marginBottom: "$6" }}>
        <Stack align css={{ gap: "$2" }}>
          Show{" "}
          <Input as="select">
            <Option value={ShowAmounts.LOW}>{ShowAmounts.LOW}</Option>
            <Option value={ShowAmounts.MID}>{ShowAmounts.MID}</Option>
            <Option value={ShowAmounts.HIGH}>{ShowAmounts.HIGH}</Option>
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
        <Text>Showing 1 to 10 of 100 entries</Text>
        <Stack align css={{ gap: "$3" }}>
          <IconButton variant="ghost">
            <ChevronLeft></ChevronLeft>
          </IconButton>
          <Text>1 - 10</Text>
          <IconButton variant="ghost">
            <ChevronRight></ChevronRight>
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default EmployeeTable;
