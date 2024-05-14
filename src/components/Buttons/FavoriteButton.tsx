import { FavoriteButtonProps } from "../../types/types";
import emptyFavorite from "../../assets/icons/emptyFavorite.svg";
import filledFavorite from "../../assets/icons/filledFavorite.svg";

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  item,
  isFavorite,
  toggleFavorite,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleFavorite(item);
  };
  return (
    <button onClick={handleFavoriteClick}>
      <img
        src={isFavorite ? filledFavorite : emptyFavorite}
        alt={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      />
    </button>
  );
};

export default FavoriteButton;
