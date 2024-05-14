import { ResultListProps, Book, Author } from "../../types/types";
import AuthorCard from "../AuthorCard/AuthorCard";
import BookCard from "../BookCard/BookCard";

const ResultList: React.FC<ResultListProps> = ({
  results,
  type,
  onItemClick,
  addFavoriteButton = false,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {results.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          className="cursor-pointer"
        >
          {type === "books" ? (
            <BookCard
              book={item as Book}
              addFavoriteButton={addFavoriteButton}
            />
          ) : (
            <AuthorCard
              author={item as Author}
              addFavoriteButton={addFavoriteButton}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultList;
