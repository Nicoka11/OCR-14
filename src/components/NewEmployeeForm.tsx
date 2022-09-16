import { styled } from "@src/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonPrimary } from "./Buttons";
import Input from "./Input";
import { UsStates } from "@src/constants";
import { Box } from "./BaseElements";
import { AddEmployeePayload } from "@src/types";
import { useEmployeeStore } from "@src/stores";
import { nanoid } from "nanoid";
import ErrorBanner from "./ErrorBanner";

enum FormFields {
  FirstName = "firstName",
  LastName = "lastName",
  BirthDate = "birthDate",
  StartDate = "startDate",
  AddressStreet = "street",
  AddressCity = "city",
  AddressState = "state",
  AddressZipCode = "zipCode",
}

const Heading = styled("h1", {
  marginBottom: "$4",
  fontSize: "1.5rem",
  textAlign: "center",
});

const Form = styled("form", {
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
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = useForm<AddEmployeePayload>();

  const stateValidator = {
    required: true,
    validate: (value: string) => value !== "default",
  };
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const onSubmit: SubmitHandler<AddEmployeePayload> = (data) => {
    addEmployee(data);
  };

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading>Create Employee</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Group>
          <label htmlFor={FormFields.FirstName}>First name</label>
          <Input
            {...register(FormFields.FirstName, { required: true })}
            placeholder="First name"
            id={FormFields.FirstName}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.LastName}>Last name</label>
          <Input
            {...register(FormFields.LastName, { required: true })}
            placeholder="Last name"
            id={FormFields.LastName}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.BirthDate}>Birth date</label>
          <Input
            type="date"
            {...register(FormFields.BirthDate, { required: true })}
            id={FormFields.BirthDate}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.StartDate}>Start date</label>
          <Input
            type="date"
            {...register(FormFields.StartDate, { required: true })}
            id={FormFields.StartDate}
          />
        </Group>

        <Group>
          <label htmlFor={FormFields.AddressStreet}>Street</label>
          <Input
            {...register(FormFields.AddressStreet, { required: true })}
            placeholder="31b"
            id={FormFields.AddressStreet}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.AddressCity}>City</label>
          <Input
            {...register(FormFields.AddressCity, { required: true })}
            placeholder="Baker Street"
            id={FormFields.AddressCity}
          />
        </Group>
        <Group>
          <label htmlFor={FormFields.AddressState}>State</label>
          <Input
            as="select"
            {...register(FormFields.AddressState, stateValidator)}
            placeholder="Arizona"
            defaultValue="default"
            id={FormFields.AddressState}
          >
            <option value="default" disabled>
              Select your state
            </option>
            {UsStates.map((state) => (
              <option key={nanoid()} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </Input>
        </Group>
        <Group>
          <label htmlFor={FormFields.AddressZipCode}>Zipcode</label>
          <Input
            {...register(FormFields.AddressZipCode, { required: true })}
            placeholder="77000"
            id={FormFields.AddressZipCode}
          />
        </Group>
        <ButtonPrimary
          as="input"
          type="submit"
          value="Save"
          css={{ marginTop: "$4", marginBottom: "$12" }}
        />
        <ErrorBanner
          message="Please fill all the fields"
          show={isSubmitted && !isValid}
        />
      </Form>
    </Box>
  );
};

export default NewEmployeeForm;
