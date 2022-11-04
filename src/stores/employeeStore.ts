import { Employee } from "@src/types";
import create from "zustand";
import dataset from "./employee-dataset";

interface Store {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  removeEmployee: (id: string) => void;
}

const useEmployeeStore = create<Store>((set) => ({
  // For demonstration purposes, the store is pre-loaded with 15 employees.
  employees: dataset,
  addEmployee: (newEmployee: Employee) =>
    set((state) => {
      return { employees: [...state.employees, newEmployee] };
    }),
  removeEmployee: (id: string) =>
    set((state) => ({
      employees: state.employees.filter((user) => user.id !== id),
    })),
}));

export default useEmployeeStore;
