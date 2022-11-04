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

// This interface is a copy of employee without the id, because I use it to type my react hook form hook, and there is no id field,
// we generate it with nanoid.
export interface AddEmployeePayload extends Omit<Employee, "id"> {}
