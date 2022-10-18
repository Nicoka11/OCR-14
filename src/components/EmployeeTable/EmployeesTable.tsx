import { Employee } from "@src/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEmployeeStore } from "@src/stores";
import { TBody, Td, Th, THead, Tr } from "./TableElements";
import { Container } from "../BaseElements";

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
];

const EmployeeTable = () => {
  const employees: Employee[] = useEmployeeStore((state) => state.employees);
  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <table>
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
      </table>
    </Container>
  );
};

export default EmployeeTable;
