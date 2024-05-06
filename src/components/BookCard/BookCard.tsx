import { BookCardProps } from "../../types/types";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="mx-2 flex-none w-30">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt="Book Cover"
          className="h-30 w-full object-cover mb-4"
        />
      ) : (
        <p>No cover available</p>
      )}
      <h3 className="text-l font-bold text-bookFlix-colors-detail">
        {book.title}
      </h3>
      <p className=" text-bookFlix-colors-detail">Author: {book.author_name}</p>
      <p className=" text-bookFlix-colors-detail">
        First Publish Year: {book.first_publish_year}
      </p>
    </div>
  );
};
export default BookCard;
