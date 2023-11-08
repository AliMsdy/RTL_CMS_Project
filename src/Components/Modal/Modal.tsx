import { ChildrenPropType } from "../../types/common.d";
import Overlay from "../UI/Overlay";

type ModalType = ChildrenPropType & {
  closeModal: () => void;
};

function Modal({ children, closeModal }: ModalType) {
  return (
    <Overlay className="z-30" actionFunction={closeModal}>
      {children}
    </Overlay>
  );
}

export default Modal;
