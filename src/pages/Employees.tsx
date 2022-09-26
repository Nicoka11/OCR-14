import { useEmployeeStore } from "@src/stores";

const Employees = () => {
  const employeeList = useEmployeeStore((state) => state.employees);
  return (
    <div>
      {employeeList.map((el, i) => (
        <p key={i}>
          {el.firstName}, from {el.state}
        </p>
      ))}
    </div>
  );
};

export default Employees;
