import { BookCardProps } from "../../types/types";

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="mx-2 flex-none w-30">
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
        <h3 className="text-l font-bold text-bookFlix-colors-detail truncate">
          {book.title}
        </h3>
        <p className=" text-bookFlix-colors-detail">
          Author: {book.author_name}
        </p>
        <p className=" text-bookFlix-colors-detail">
          First Publish Year: {book.first_publish_year}
        </p>
      </div>
    </div>
  );
};
export default BookCard;
