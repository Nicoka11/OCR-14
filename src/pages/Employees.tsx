import { useEmployeeStore } from "@src/stores";

const Employees = () => {
  const employeeList = useEmployeeStore((state) => state.employees);
  return (
    <div>
      {employeeList.map((el, i) => (
        <p key={i}>{el.firstName}</p>
      ))}
    </div>
  );
};

export default Employees;
