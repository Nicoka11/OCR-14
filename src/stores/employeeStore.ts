import { AddEmployeePayload, Employee } from "@src/types";
import create from "zustand";
import { nanoid } from "nanoid";

interface Store {
  employees: Employee[];
  addEmployee: (employee: AddEmployeePayload) => void;
  removeEmployee: (id: string) => void;
}

const useEmployeeStore = create<Store>((set) => ({
  employees: [],
  addEmployee: (newEmployeePayload: AddEmployeePayload) =>
    set((state) => {
      const newEmployee: Employee = {
        id: nanoid(),
        ...newEmployeePayload,
      };
      return { employees: [...state.employees, newEmployee] };
    }),
  removeEmployee: (id: string) =>
    set((state) => ({
      employees: state.employees.filter((user) => user.id !== id),
    })),
}));

export default useEmployeeStore;
