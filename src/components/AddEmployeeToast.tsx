import * as ToastPrimitive from "@radix-ui/react-toast";
import { styled } from "@src/styles";
import { ComponentProps, keyframes } from "@stitches/react";
import { useAtom } from "jotai";
import { ElementType, useEffect, useRef, useState } from "react";
import { Button } from "./Buttons";
import { lastEmployeeAddedId } from "@src/atomic/atoms";
import { useEmployeeStore } from "@src/stores";

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const VIEWPORT_PADDING = 25;

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow: "$toast",
  padding: 15,
  display: "grid",
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: "auto max-content",
  columnGap: 15,
  alignItems: "center",

  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: "title",
  marginBottom: 5,
  fontWeight: 500,
  color: "$slate12",
  fontSize: 15,
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: "action",
});

// Exports
export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const Toast = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastAction = StyledAction;
export const ToastClose = ToastPrimitive.Close;

interface AddEmployeeToastProps extends ComponentProps<typeof Button> {
  onBtnClick?: () => void;
  btnAs?: ElementType;
  hasErrors: boolean;
}

const AddEmployeeToast = ({
  onBtnClick,
  btnAs = "input",
  hasErrors,
  ...props
}: AddEmployeeToastProps) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  const [lastEmployeeAdded] = useAtom(lastEmployeeAddedId);
  const removeEmployee = useEmployeeStore((state) => state.removeEmployee);
  
  const onUndo = () => {
    removeEmployee(lastEmployeeAdded);
    setOpen(false);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection="right">
      <Button
        as={btnAs}
        type="submit"
        value="Save"
        size="full"
        onClick={() => {
          if (onBtnClick) onBtnClick();
          if (hasErrors) return;
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        {...props}
      />

      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Employee added to database</ToastTitle>
        <ToastAction asChild altText="Undo adding employee">
          <Button onClick={onUndo}>Undo</Button>
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};

export default AddEmployeeToast;
