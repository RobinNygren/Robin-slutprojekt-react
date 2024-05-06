export type Book = {
  title: string;
  cover_i: number;
  author_name: string;
  first_publish_year: number;
  key: string;
};

export type Author = {
  key: string;
  name: string;
};

export type ApiResponse = {
  docs: Book[];
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
};

export type CarouselProps = {
  /* items: JSX.Element[]; */
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  title: string;
};

export type BookCardProps = {
  book: Book;
  title: string;
  cover_i: number;
  author_name: string;
  first_publish_year: number;
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
