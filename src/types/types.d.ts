export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
}

export interface AddEmployeePayload extends Omit<Employee, "id"> {}
