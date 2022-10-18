import { styled } from "@src/styles";

export const Th = styled("th", {
  padding: "$4 $2",
});

export const THead = styled("thead", {
  borderBottom: "$slate12 1px solid",
});

export const Td = styled("td", {
  padding: "$2 $4",
});

export const Tr = styled("tr", {
  transition: "$default",
  "& > td:not(:last-child)": { borderRight: "$slate5 1px solid" },
  variants: {
    lightBg: {
      true: {
        backgroundColor: "$slate3",
      },
    },
  },
});

export const TBody = styled("tbody", {});
