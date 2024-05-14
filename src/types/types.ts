import { ReactNode } from "react";

export type Book = {
  title: string;
  cover_i?: number;
  author_name: string[];
  first_publish_year?: number;
  key: string;
  isFavorite?: boolean;
};

export type Author = {
  alternate_names?: string[];
  birth_date?: string;
  key: string;
  name: string;
  top_subjects?: string[];
  top_work?: string;
  type?: string;
  work_count?: number;
  isFavorite?: boolean;
};

export type AuthorApiResponse = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Author[];
};

export type BookApiResponse = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
};

export type ApiResponse = {
  docs: Book[];
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
};

export type GlobalState = {
  favoriteBooks: Book[];
  favoriteAuthors: Author[];
  statistics: ApiResponse[];
};

export type GlobalStateProviderProp = {
  children: React.ReactNode;
};

export type Action =
  | { type: "ADD_FAVORITE_BOOK"; payload: Book }
  | { type: "REMOVE_FAVORITE_BOOK"; payload: Book }
  | { type: "ADD_FAVORITE_AUTHOR"; payload: Author }
  | { type: "REMOVE_FAVORITE_AUTHOR"; payload: Author }
  | { type: "ADD_STATISTICS"; payload: ApiResponse };

export type CarouselProps = {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  title: string;
};

export type BookCardProps = {
  book: Book;
  addFavoriteButton?: boolean;
  removeFavoriteButton?: boolean;
};

export type AuthorCardProps = {
  author: Author;
  addFavoriteButton?: boolean;
  removeFavoriteButton?: boolean;
};
export type ModalItem = Book | Author;

export type CardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  actions?: ReactNode;
  addFavoriteButton?: boolean;
  item?: ModalItem;
  toggleFavorite?: (item: ModalItem) => void;
};

export type SearchInputProps = {
  searchType: string;
  setSearchType: (searchType: string) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  searchOptions: { value: string; name: string; url: string }[];
};

export type ResultListProps = {
  results: Book[] | Author[];
  type: "books" | "authors";
  onItemClick: (item: Book | Author) => void;
  addFavoriteButton?: boolean;
};

export type ModalManagerProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  addFavoriteButton?: boolean;
  item?: ModalItem;
  toggleFavorite?: (item: ModalItem) => void;
};

export type SearchFormProps = {
  searchType: string;
  setSearchType: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchOptions: { value: string; name: string; url: string }[];
  onSearch: () => void;
  onClear: () => void;
};

export type FavoriteButtonProps = {
  item: ModalItem;
  isFavorite: boolean;
  toggleFavorite: (item: ModalItem) => void;
};

export type Work = {
  key: string;
  title: string;
  edition_count: number;
  cover_id?: number;
  cover_edition_key?: string;
  subject: string[];
  ia_collection: string[];
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition?: string;
  lending_identifier?: string;
  authors: Author[];
  first_publish_year: number;
  ia: string;
  public_scan: boolean;
  has_fulltext: boolean;
  availability: {
    status: string;
    available_to_browse: boolean;
    available_to_borrow: boolean;
    available_to_waitlist: boolean;
    is_printdisabled: boolean;
    is_readable: boolean;
    is_lendable: boolean;
    is_previewable: boolean;
    identifier: string;
    isbn?: string;
    oclc?: string;
    openlibrary_work: string;
    openlibrary_edition: string;
    last_loan_date?: string;
    num_waitlist?: number;
    last_waitlist_date?: string;
    is_restricted: boolean;
    is_browseable: boolean;
    __src__: string;
  };
};
