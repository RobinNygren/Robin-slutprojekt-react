export type Book = {
  title: string;
  cover_i?: number;
  author_name: string[];
  first_publish_year?: number;
  key: string;
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
  /* items: JSX.Element[]; */
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  title: string;
};

export type BookCardProps = {
  book: Book;
  /*  title: string;
  cover_i: number;
  author_name: string;
  first_publish_year: number; */
};

export type AuthorCardProps = {
  author: Author;
};

export type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
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
