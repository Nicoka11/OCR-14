import { atom } from "jotai";

export const toggleDarkThemeAtom = atom(
  window.matchMedia("(prefers-color-scheme: dark)").matches
);

export const lastEmployeeAddedId = atom<string>("");
