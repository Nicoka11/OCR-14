import { styled } from "@src/styles";

export const Box = styled("div");

export const Container = styled("div", {
  margin: "0 auto",
  maxWidth: "$container",
});

export const Heading = styled("h1", {
  marginBottom: "$12",
  fontSize: "1.5rem",
  textAlign: "center",
});

export const Stack = styled("div", {
  display: "flex",
  variants: {
    vertical: {
      true: {
        flexDirection: "column",
      },
    },
    space: {
      true: {
        justifyContent: "space-between",
      },
    },
    align: {
      true: {
        alignItems: "center",
      },
    },
  },
});

export const Text = styled("p", { display: "inline-block" });
