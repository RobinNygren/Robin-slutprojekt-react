import { useContext } from "react";
import { AuthorCardProps, Author, ModalItem } from "../../types/types";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import FavoriteButton from "../Buttons/FavoriteButton";

const AuthorCard: React.FC<AuthorCardProps> = ({
  author,
  addFavoriteButton,
}) => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const isFavorite = state.favoriteAuthors.some(
    (favAuthor) => favAuthor.key === author.key
  );

  const toggleFavorite = (author: Author) => {
    const actionType = isFavorite
      ? "REMOVE_FAVORITE_AUTHOR"
      : "ADD_FAVORITE_AUTHOR";
    dispatch({
      type: actionType,
      payload: { ...author, isFavorite: !isFavorite },
    });
  };
  return (
    <div className="mx-2 flex-none w-30 cursor-pointer bg-white p-4 shadow rounded-lg">
      {author.key && (
        <img
          src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
          alt={`Author ${author.name}`}
          className="h-50 w-full object-cover rounded mb-4"
        />
      )}

      <div className="text-center">
        <h3 className="text-lg font-bold">{author.name}</h3>
        <p className="text-sm text-gray-500">
          Works Count: {author.work_count}
        </p>
        <p className="text-sm text-gray-500">Birth Year: {author.birth_date}</p>

        {addFavoriteButton && (
          <FavoriteButton
            item={author}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite as (item: ModalItem) => void}
          />
        )}
      </div>
    </div>
  );
};

export default AuthorCard;
