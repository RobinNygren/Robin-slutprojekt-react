import { CheckmarkButtonProps } from "../../types/types";
import checkMark from "../../assets/icons/checkMark.svg";

const CheckmarkButton: React.FC<CheckmarkButtonProps> = ({
  item,
  isRead,
  toggleRead,
}) => {
  const handleReadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleRead(item);
  };

  if (isRead) {
    return null;
  }

  return (
    <button onClick={handleReadClick}>
      <img src={checkMark} alt="Mark as Read" />
    </button>
  );
};

export default CheckmarkButton;
