# BookFlix

BookFlix is a web application designed to provide users with a platform to search for books and authors, add books to their favorites, review books, and track their reading statistics. The application uses the Open Library API to fetch book and author data.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Contributing](#contributing)

## Features

- Search for books by title or authors by name.
- View detailed information about books and authors.
- Add books and authors to favorites.
- Track reading progress and review books.
- View statistics about read books, including total books read, total pages read, average book rating, and average number of pages per book.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RobinNygren/Robin-slutprojekt-react
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: An enhanced version of JavaScript that includes static typing.
- **Tailwind CSS**: A utility-first CSS framework.
- **Headless UI**: Unstyled, fully accessible UI components designed to integrate with Tailwind CSS.
- **React Router**: A library for routing in React applications.
- **Open Library API**: An API for accessing a vast amount of book and author data.

## API

BookFlix uses the Open Library API to fetch data. Here are the main endpoints used:

- **Search books by title**: `https://openlibrary.org/search.json?title={title}`
- **Search authors by name**: `https://openlibrary.org/search/authors.json?q={name}`
- **Get 25 Sci-Fi books**: `https://openlibrary.org/subjects/sci-fi.json?limit=25`
- **Get 25 Love books**: `https://openlibrary.org/subjects/love.json?limit=25`

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
