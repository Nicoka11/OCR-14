import { Employee } from "@src/types";
import create from "zustand";

interface Store {
  employees: Employee[];
}

const EmployeeStore = create<Store>((set) => ({
  employees: [],
  addEmployee: (newEmployee: Employee) =>
    set((state) => ({ employees: [...state.employees, newEmployee] })),
  removeEmployee: (id: string) =>
    set((state) => ({
      employees: state.employees.filter((user) => user.id !== id),
    })),
}));

export default EmployeeStore;
