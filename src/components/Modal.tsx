import {
  ModalBackground,
  ModalContainer,
  ModalChildren,
  ModalProps,
  CloseIcon as Close,
  CloseButton,
} from "@nicoka/modal";
import { styled } from "@src/styles";

const Container = styled(ModalContainer, {
  backgroundColor: "$slate9",
});

const Modal = ({
  isOpen,
  onClickOutside,
  onModalClick,
  onClick,
  children,
}: ModalProps) => (
  <ModalBackground
    show={isOpen}
    onClick={onClickOutside ? onClickOutside : onClick}
  >
    <Container onClick={onModalClick}>
      <CloseButton onClick={onClick}>
        <Close />
      </CloseButton>
      {children && <ModalChildren>{children}</ModalChildren>}
    </Container>
  </ModalBackground>
);

export default Modal;
