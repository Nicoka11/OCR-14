import { styled } from "@src/styles";
import { IconButton } from "@src/components/Buttons";

export const Table = styled("table", {
  width: "$full",
});

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

export const SortingArrow = styled(IconButton, {
  transition: "$default",
  height: "$6",
  width: "$6",
  variants: {
    variant: {
      asc: {
        transform: "rotate(90deg)",
      },
      desc: {
        transform: "rotate(270deg)",
      },
      default: {
        transition: "$default",
        opacity: 0,
      },
    },
  },
});
