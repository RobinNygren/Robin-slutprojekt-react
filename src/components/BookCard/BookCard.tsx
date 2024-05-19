import { useContext } from "react";
import { GlobalStateContext } from "../../state/GlobalStateContext";
import { Book, BookCardProps, BookDetails, ModalItem } from "../../types/types";
import FavoriteButton from "../Buttons/FavoriteButton";
import CheckmarkButton from "../Buttons/CheckMarkButton";

const BookCard: React.FC<BookCardProps> = ({ book, addFavoriteButton }) => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const isFavorite = state.favoriteBooks.some(
    (favBook) => favBook.key === book.key
  );
  const isRead = !!state.readBooksDetails[book.key]?.read;

  const toggleFavorite = (book: Book) => {
    const actionType = isFavorite
      ? "REMOVE_FAVORITE_BOOK"
      : "ADD_FAVORITE_BOOK";
    dispatch({
      type: actionType,
      payload: { ...book, isFavorite: !isFavorite },
    });
  };

  const toggleRead = (book: Book) => {
    if (!isRead) {
      const bookDetails: BookDetails = {
        ...book,
        read: true,
        rating: 0,
        review: "",
        totalPages: 0,
      };
      dispatch({
        type: "SET_BOOK_AS_READ",
        payload: bookDetails,
      });
    }
  };

  return (
    <div className="mx-2 flex-none w-30 cursor-pointer bg-bookFlix-colors-primary p-4 shadow rounded-lg">
      <div
        className="relative flex justify-center items-center mb-4"
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
            <p className="text-bookFlix-colors-background">
              No cover available
            </p>
          </div>
        )}
        {isRead && (
          <span className="absolute top-2 left-2 bg-bookFlix-colors-accent text-bookFlix-colors-background text-xs font-bold px-2 py-1 rounded">
            Read
          </span>
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
        <CheckmarkButton
          item={book}
          isRead={isRead}
          toggleRead={toggleRead as (item: ModalItem) => void}
        />
      </div>
    </div>
  );
};
export default BookCard;
