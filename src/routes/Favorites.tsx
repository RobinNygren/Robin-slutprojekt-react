import { useContext, useState } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import BookCard from "../components/BookCard/BookCard";
import Carousel from "../components/Carousel/Carousel";
import AuthorCard from "../components/AuthorCard/AuthorCard";
import ModalManager from "../components/ModalManager/ModalManager";
import { Author, Book } from "../types/types";
import useModal from "../hooks/useModal";

const Favorites = () => {
  const { state } = useContext(GlobalStateContext);
  const { favoriteBooks, favoriteAuthors } = state;
  const { modalOpen, selectedItem, openModal, closeModal } = useModal();

  const handleItemSelect = (item: Book | Author) => {
    openModal(item);
  };

  return (
    <>
      <h1 className=" text-2xl text-bookFlix-colors-detail mb-4 font-bold text-center">
        My Favorites
      </h1>
      <Carousel title="Books">
        {favoriteBooks.map((book) => (
          <div key={book.key} onClick={() => handleItemSelect(book)}>
            <BookCard book={book} addFavoriteButton={true} />
          </div>
        ))}
      </Carousel>
      <Carousel title="Authors">
        {favoriteAuthors.map((author) => (
          <div key={author.key} onClick={() => handleItemSelect(author)}>
            <AuthorCard author={author} addFavoriteButton={true} />
          </div>
        ))}
      </Carousel>
      {modalOpen && selectedItem && (
        <ModalManager
          isOpen={modalOpen}
          onClose={closeModal}
          addFavoriteButton={false}
          item={selectedItem}
        >
          {"title" in selectedItem ? (
            <BookCard book={selectedItem as Book} addFavoriteButton={true} />
          ) : (
            <AuthorCard
              author={selectedItem as Author}
              addFavoriteButton={true}
            />
          )}
        </ModalManager>
      )}
    </>
  );
};

export default Favorites;
