import { Employee } from "@src/types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEmployeeStore } from "@src/stores";

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
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
