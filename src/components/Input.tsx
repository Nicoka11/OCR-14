import { styled } from "@src/styles";
import { ComponentProps } from "@stitches/react";
import { ElementType, ForwardedRef, forwardRef, ReactNode } from "react";

export const Input = styled("input", {
  padding: "$2",
  width: "$full",
  border: "2px solid $blue12",
  borderRadius: "$md",
  backgroundColor: "transparent",
  outline: "none",
  color: "$blue12",
  maxWidth: "$72",
  transition: "$default",
  variants: {
    error: {
      true: {
        border: "2px solid $red9",
        "&::placeholder": {
          color: "$red9",
          opacity: "40%",
        },
      },
    },
  },
});

const Group = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  width: "100%",
  position: "relative",
});

const ErrorMessage = styled("p", {
  color: "$red9",
  fontSize: "x-small",
  position: "absolute",
  top: "100%",
  marginTop: "$1",
  left: "0",
});

interface InputGroupProps extends ComponentProps<typeof Input> {
  errorMessage?: string;
  label: string;
  id: string;
  as?: ElementType;
  children?: ReactNode;
}

const InputGroup = forwardRef(
  (
    { errorMessage, label, id, as, children, ...rest }: InputGroupProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const hasError = Boolean(errorMessage?.length);
    return (
      <Group>
        <label htmlFor={id}>{label}</label>
        <Input as={as} ref={ref} error={hasError} id={id} {...rest}>
          {children}
        </Input>
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Group>
    );
  }
);

export default InputGroup;
