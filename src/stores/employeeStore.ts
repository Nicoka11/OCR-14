import { AddEmployeePayload, Employee } from "@src/types";
import create from "zustand";
import { nanoid } from "nanoid";

interface Store {
  employees: Employee[];
  addEmployee: (employee: AddEmployeePayload) => void;
  removeEmployee: (id: string) => void;
  removeLastEmployee: () => void;
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
  removeLastEmployee: () =>
    set((state) => {
      if (!state.employees.length) return { employees: state.employees };
      return {
        employees: [{ ...state.employees.pop() }] as Employee[],
      };
    }),
}));

export default useEmployeeStore;
