import { styled } from "@src/styles";

export const Button = styled("button", {
  padding: "$3 $6",
  width: "fit-content",
  backgroundColor: "$blue6",
  color: "$slate12",
  border: "none",
  borderRadius: "$base",
  cursor: "pointer",
  transition: "$default",
  "&:hover": {
    backgroundColor: "$blue7",
  },
  "&:active": {
    backgroundColor: "$blue6",
  },
  "&:disabled": {
    backgroundColor: "$blue3",
    color: "$slate8",
  },
  variants: {
    variant: {
      ghost: {
        color: "$blue6",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&:active": {
          backgroundColor: "transparent",
        },
        "&:disabled": {
          backgroundColor: "transparent",
          color: "$slate8",
        },
      },
    },
    size: {
      full: {
        width: "$full",
      },
    },
    visible: {
      true: {
        opacity: "0",
        pointerEvents: "none",
      },
    },
  },
});

export const IconButton = styled(Button, {
  height: "$8",
  width: "$8",
  overflow: "hidden",
  padding: "$0",
});
