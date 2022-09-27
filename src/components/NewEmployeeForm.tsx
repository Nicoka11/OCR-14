import { styled } from "@src/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./Buttons";
import InputGroup from "./Input";
import { UsStates } from "@src/constants";
import { Box } from "./BaseElements";
import { AddEmployeePayload, Employee } from "@src/types";
import { useEmployeeStore } from "@src/stores";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import AddEmployeeToast from "./AddEmployeeToast";
import { lastEmployeeAddedId } from "@src/atomic/atoms";
import { useAtom } from "jotai";
import { triggerAsyncId } from "async_hooks";

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

const requiredMessage = "This fields is required";

const Heading = styled("h1", {
  marginBottom: "$12",
  fontSize: "1.5rem",
  textAlign: "center",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  width: "$full",
  maxWidth: "$72",
});

const Option = styled("option", {
  backgroundColor: "$slate1",
});

const NewEmployeeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isValid },
    formState,
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
          errorMessage={errors.state?.message}
          label="State"
          placeholder="Arizona"
          defaultValue="default"
          id={FormFields.AddressState}
          {...register(FormFields.AddressState, stateValidator)}
        >
          <Option value="default" disabled>
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
