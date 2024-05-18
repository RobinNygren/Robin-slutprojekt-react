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
  const { state, dispatch } = useContext(GlobalStateContext);

  const handleClose = () => {
    dispatch({ type: "SET_MODAL_CLOSED" });
  };

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
