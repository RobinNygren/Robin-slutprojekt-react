import { useContext, useState } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import BookCard from "../components/BookCard/BookCard";
import Carousel from "../components/Carousel/Carousel";
import AuthorCard from "../components/AuthorCard/AuthorCard";
import ModalManager from "../components/ModalManager/ModalManager";
import { Author, Book } from "../types/types";

const Favorites = () => {
  const { state } = useContext(GlobalStateContext);
  const { favoriteBooks, favoriteAuthors } = state;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [selectedItem, setSelectedItem] = useState<Book | Author | undefined>(
    undefined
  );

  const handleItemSelect = (item: Book | Author, type: "book" | "author") => {
    setSelectedItem(item);
    const content =
      type === "book" ? (
        <BookCard book={item as Book} addFavoriteButton={false} />
      ) : (
        <AuthorCard author={item as Author} addFavoriteButton={false} />
      );
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">My Favorites</h1>
      <Carousel title="Books">
        {favoriteBooks.map((book) => (
          <div key={book.key} onClick={() => handleItemSelect(book, "book")}>
            <BookCard book={book} addFavoriteButton={true} />
          </div>
        ))}
      </Carousel>
      <Carousel title="Authors">
        {favoriteAuthors.map((author) => (
          <div
            key={author.key}
            onClick={() => handleItemSelect(author, "author")}
          >
            <AuthorCard author={author} addFavoriteButton={true} />
          </div>
        ))}
      </Carousel>
      <ModalManager
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        addFavoriteButton={false}
        item={selectedItem}
      >
        {modalContent}
      </ModalManager>
    </>
  );
};

export default Favorites;
