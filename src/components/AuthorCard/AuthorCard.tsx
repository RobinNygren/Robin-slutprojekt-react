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
    <div className="mx-2 flex-none w-30 cursor-pointer bg-bookFlix-colors-primary p-4 shadow rounded-lg">
      <div
        className="flex justify-center items-center mb-4"
        style={{ minHeight: "250px" }}
      >
        {author.key ? (
          <img
            src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
            alt={`Author ${author.name}`}
            className="max-h-60 w-auto object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200 ">
            <p className="text-bookFlix-colors-secondary">No image available</p>
          </div>
        )}
      </div>

      <div className="text-center flex-grow">
        <h3 className="text-l font-bold text-bookFlix-colors-secondary truncate">
          {author.name}
        </h3>
        <p className="text-bookFlix-colors-secondary">
          Works Count: {author.work_count}
        </p>
        <p className="text-bookFlix-colors-secondary">
          Birth Year: {author.birth_date}
        </p>

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
