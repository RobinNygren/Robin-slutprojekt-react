import { Book, Work } from "../types/types";

export const mapWorkToBook = (works: Work[]): Book[] => {
  return works.map((work) => ({
    title: work.title,
    cover_i: work.cover_id || 0,
    author_name: work.authors.map((author) => author.name),
    first_publish_year: work.first_publish_year || 0,
    key: work.key,
  }));
};
