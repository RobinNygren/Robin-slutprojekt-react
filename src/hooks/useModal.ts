import { useState } from "react";
import { ModalItem } from "../types/types";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>(null);

  const openModal = (item: ModalItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return {
    modalOpen,
    selectedItem,
    openModal,
    closeModal,
  };
};

export default useModal;
