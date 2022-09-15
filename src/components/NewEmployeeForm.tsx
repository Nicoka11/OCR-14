import { styled } from "@src/styles";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "./Buttons";
import Input from "./Input";
import { UsStates } from "@src/constants";
import { Box } from "./BaseElements";

enum FormFields {
  FirstName = "first-name",
  LastName = "last-name",
  BirthDate = "date-of-birth",
  StartDate = "start-date",
  AddressStreet = "street",
  AddressCity = "city",
  AddressState = "state",
  AddressZipCode = "zip-code",
}

const Heading = styled("h1", {
  marginBottom: "$4",
  fontSize: "1.5rem",
  textAlign: "center",
});

const Form = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  width: "$full",
  maxWidth: "$72",
});

const Group = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  width: "100%",
});

const NewEmployeeForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading>Create Employee</Heading>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <Group>
          <label htmlFor={FormFields.FirstName}>First name</label>
          <Input
            {...register(FormFields.FirstName)}
            placeholder="First name"
            id={FormFields.FirstName}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.LastName}>Last name</label>
          <Input
            {...register(FormFields.LastName)}
            placeholder="Last name"
            id={FormFields.LastName}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.BirthDate}>Birth date</label>
          <Input
            type="date"
            {...register(FormFields.BirthDate)}
            id={FormFields.BirthDate}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.StartDate}>Start date</label>
          <Input
            type="date"
            {...register(FormFields.StartDate)}
            id={FormFields.StartDate}
          />
        </Group>

        <Group>
          <label htmlFor={FormFields.AddressStreet}>Street</label>
          <Input
            {...register(FormFields.AddressStreet)}
            placeholder="31b"
            id={FormFields.AddressStreet}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.AddressCity}>City</label>
          <Input
            {...register(FormFields.AddressCity)}
            placeholder="Baker Street"
            id={FormFields.AddressCity}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.AddressState}>State</label>
          <Input
            as="select"
            {...register(FormFields.AddressState)}
            placeholder="Arizona"
            id={FormFields.AddressState}
          >
            {UsStates.map((state) => (
              <option value={state.abbreviation}>{state.name}</option>
            ))}
          </Input>
        </Group>
        <Group>
          <label htmlFor={FormFields.AddressZipCode}>Zipcode</label>
          <Input
            {...register(FormFields.AddressZipCode)}
            placeholder="77000"
            id={FormFields.AddressZipCode}
          />
        </Group>
        <ButtonPrimary
          as="input"
          type="submit"
          value="Save"
          css={{ marginTop: "$12" }}
        />
      </Form>
    </Box>
  );
};

export default NewEmployeeForm;
