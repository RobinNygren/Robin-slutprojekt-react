import { ModalManagerProps } from "../../types/types";
import CardModal from "../CardModal/CardModal";

const ModalManager: React.FC<ModalManagerProps> = ({
  isOpen,
  onClose,
  content,
  actions,
}) => {
  return (
    <CardModal
      isOpen={isOpen}
      onClose={onClose}
      content={content}
      actions={actions}
    />
  );
};

export default ModalManager;
