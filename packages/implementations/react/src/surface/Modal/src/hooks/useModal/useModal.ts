import { useContext } from "react";

import { ModalManager, ModalManagerProps } from "../../contexts";

export const useModal: () => ModalManagerProps = () => {
  const context = useContext(ModalManager);

  if (context == null || Object.keys(context).length === 0) {
    throw new Error(
      "ModalHeader or ModalBody components must be wrapped in <Modal />",
    );
  }
  return context;
};
