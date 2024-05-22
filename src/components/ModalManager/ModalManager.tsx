import { useContext } from "react";
import { ModalManagerProps } from "../../types/types";
import CardModal from "../CardModal/CardModal";
import { GlobalStateContext } from "../../state/GlobalStateContext";

const ModalManager: React.FC<ModalManagerProps> = ({
  isOpen,
  onClose,
  children,
  addFavoriteButton = false,
  item,
  toggleFavorite,
  onBookSubmit,
}) => {
  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      content={children}
      addFavoriteButton={addFavoriteButton}
      item={item}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default ModalManager;
