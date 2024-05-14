import { ModalManagerProps } from "../../types/types";
import CardModal from "../CardModal/CardModal";

const ModalManager: React.FC<ModalManagerProps> = ({
  isOpen,
  onClose,
  content,
  addFavoriteButton = false,
  item,
  toggleFavorite,
}) => {
  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      content={content}
      addFavoriteButton={addFavoriteButton}
      item={item}
      toggleFavorite={toggleFavorite}
    />
  );
};

export default ModalManager;
