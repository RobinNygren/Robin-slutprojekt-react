import { useState } from "react";
import { BookDetails } from "../types/types";

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BookDetails | null>(null);

  const openModal = (item: BookDetails) => {
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
