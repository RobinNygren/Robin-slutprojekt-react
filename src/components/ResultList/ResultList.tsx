import { ResultListProps } from "../../types/types";
import AuthorCard from "../AuthorCard/AuthorCard";
import BookCard from "../BookCard/BookCard";

const ResultList: React.FC<ResultListProps> = ({
  results,
  type,
  onItemClick,
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
            <BookCard book={item} />
          ) : (
            <AuthorCard author={item} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResultList;
