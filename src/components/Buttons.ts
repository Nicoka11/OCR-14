import { styled } from "@src/styles";

export const ButtonPrimary = styled("button", {
  padding: "$2 $4",
  backgroundColor: "$blue5",
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
});

export const ButtonGhost = styled("button", {
  padding: "$2 $4",
  color: "$slate12",
  background:"transparent",
  border: "none",
  borderRadius: "$base",
  cursor: "pointer",
  transition: "$default",
});
