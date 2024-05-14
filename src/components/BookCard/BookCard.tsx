import { useContext } from "react";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import { Book, BookCardProps, ModalItem } from "../../types/types";
import FavoriteButton from "../Buttons/FavoriteButton";

const BookCard: React.FC<BookCardProps> = ({ book, addFavoriteButton }) => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const isFavorite = state.favoriteBooks.some(
    (favBook) => favBook.key === book.key
  );

  const toggleFavorite = (book: Book) => {
    const actionType = isFavorite
      ? "REMOVE_FAVORITE_BOOK"
      : "ADD_FAVORITE_BOOK";
    dispatch({
      type: actionType,
      payload: { ...book, isFavorite: !isFavorite },
    });
  };

  return (
    <div className="mx-2 flex-none w-30 cursor-pointer">
      <div
        className="flex justify-center items-center mb-4"
        style={{ minHeight: "250px" }}
      >
        {book.cover_i ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt="Book Cover"
            className="max-h-60 w-auto object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <p>No cover available</p>
          </div>
        )}
      </div>
      <div className="text-center flex-grow">
        <h3 className="text-l font-bold text-bookFlix-colors-secondary truncate">
          {book.title}
        </h3>
        <p className=" text-bookFlix-colors-secondary">
          Author: {book.author_name}
        </p>
        <p className=" text-bookFlix-colors-secondary">
          First Publish Year: {book.first_publish_year}
        </p>
        {addFavoriteButton && (
          <FavoriteButton
            item={book}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite as (item: ModalItem) => void}
          />
        )}
      </div>
    </div>
  );
};
export default BookCard;
