import { Employee } from "@src/types";
import create from "zustand";

interface Store {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  removeEmployee: (id: string) => void;
}

const useEmployeeStore = create<Store>((set) => ({
  employees: [],
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
