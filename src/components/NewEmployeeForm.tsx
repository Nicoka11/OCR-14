import { styled } from "@src/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./Buttons";
import InputGroup, { Option } from "./Input";
import { UsStates } from "@src/constants";
import { Box, Heading } from "./BaseElements";
import { AddEmployeePayload, Employee } from "@src/types";
import { useEmployeeStore } from "@src/stores";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import AddEmployeeToast from "./AddEmployeeToast";
import { lastEmployeeAddedId } from "@src/atomic/atoms";
import { useAtom } from "jotai";

enum FormFields {
  FirstName = "firstName",
  LastName = "lastName",
  BirthDate = "birthDate",
  StartDate = "startDate",
  AddressStreet = "street",
  AddressCity = "city",
  AddressState = "state",
  AddressZipCode = "zipCode",
  Department = "department",
}

const requiredMessage = "This fields is required";

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  width: "$full",
  maxWidth: "$72",
});

const NewEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isValid },
  } = useForm<AddEmployeePayload>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const hasErrors = useCallback(
    () => Boolean(Object.values(errors).length),
    [errors]
  );
  const [asyncReset, setAsyncReset] = useState<boolean>(false);
  const [_, setId] = useAtom(lastEmployeeAddedId);
  const stateValidator = {
    required: requiredMessage,
    validate: (value: string) =>
      value !== "default" || "Please select a state in the list",
  };
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const onSubmit: SubmitHandler<AddEmployeePayload> = (data) => {
    const id = nanoid();
    const employee: Employee = { id, ...data };
    addEmployee(employee);
    setId(id);
    resetFields();
  };

  const resetFields = () => setAsyncReset(!asyncReset);

  useEffect(() => {
    reset();
    trigger();
  }, [asyncReset]);
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
        <InputGroup
          errorMessage={errors.firstName?.message}
          label="First Name"
          id={FormFields.FirstName}
          placeholder="First name"
          {...register(FormFields.FirstName, { required: requiredMessage })}
          defaultValue=""
        />
        <InputGroup
          errorMessage={errors.lastName?.message}
          label="Last Name"
          id={FormFields.LastName}
          placeholder="Last name"
          {...register(FormFields.LastName, { required: requiredMessage })}
        />
        <InputGroup
          errorMessage={errors.birthDate?.message}
          label="Birth date"
          type="date"
          id={FormFields.BirthDate}
          {...register(FormFields.BirthDate, { required: requiredMessage })}
        />
        <InputGroup
          errorMessage={errors.startDate?.message}
          label="Start date"
          type="date"
          id={FormFields.StartDate}
          {...register(FormFields.StartDate, { required: requiredMessage })}
        />
        <InputGroup
          errorMessage={errors.street?.message}
          label="Street"
          placeholder="31b Baker Street"
          id={FormFields.AddressStreet}
          {...register(FormFields.AddressStreet, { required: requiredMessage })}
        />
        <InputGroup
          errorMessage={errors.city?.message}
          label="City"
          placeholder="London"
          id={FormFields.AddressCity}
          {...register(FormFields.AddressCity, { required: requiredMessage })}
        />
        <InputGroup
          as="select"
          id={FormFields.AddressState}
          errorMessage={errors.state?.message}
          label="State"
          defaultValue="default"
          {...register(FormFields.AddressState, stateValidator)}
        >
          <Option value="default" disabled hidden>
            Select your state
          </Option>
          {UsStates.map((state) => (
            <Option key={nanoid()} value={state.abbreviation}>
              {state.name}
            </Option>
          ))}
        </InputGroup>
        <InputGroup
          id={FormFields.AddressZipCode}
          errorMessage={errors.zipCode?.message}
          label="Zipcode"
          placeholder="70000"
          {...register(FormFields.AddressZipCode, {
            required: requiredMessage,
          })}
        />
        <div>
          <InputGroup
            as="select"
            id={FormFields.Department}
            errorMessage={errors.department?.message}
            label="Department"
            defaultValue="sales"
            {...register(FormFields.Department)}
          >
            <Option value="sales" selected>
              Sales
            </Option>
            <Option value="marketing">Marketing</Option>
            <Option value="engineering">Engineering</Option>
            <Option value="human-ressources">Human Resources</Option>
            <Option value="legal">Legal</Option>
          </InputGroup>
        </div>
        <div>
          <AddEmployeeToast
            hasErrors={hasErrors()}
            disabled={!isValid}
            css={{ marginTop: "$6" }}
          />
          <Button
            variant="ghost"
            size="full"
            onClick={resetFields}
            css={{ marginBottom: "$12", marginTop: "$2" }}
          >
            Reset fields
          </Button>
        </div>
      </Form>
    </Box>
  );
};

export default NewEmployeeForm;
