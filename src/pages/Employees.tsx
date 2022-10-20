import { Container, Heading } from "@src/components/BaseElements";
import EmployeeTable from "@src/components/EmployeeTable";

const Employees = () => {
  return (
    <Container>
      <Heading>Current Employees</Heading>
      <EmployeeTable />
    </Container>
  );
};

export default Employees;
