import React from 'react';
import { Book } from '../consts/types';
import axios from 'axios';
import { generateUniqId } from '../utils/utils';

export interface BookProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  filteredBooks: Book[];
  setFilteredBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  selectedBook: Book;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book>>;
  shouldShowAddBookModal: boolean;
  setShouldShowAddBookModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookContext = React.createContext<BookProps>({} as BookProps);

const BookProvider = ({ children }: any) => {
  const [books, setBooks] = React.useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>(books);
  const [selectedBook, setSelectedBook] = React.useState<Book>();
  const [shouldShowAddBookModal, setShouldShowAddBookModal] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  React.useLayoutEffect(() => {
    const getBooks = async () => {
      try {
        const userId = '103202065418740874149';
        const bookshelfId = '1001';
        const { data } = await axios.get(
          'https://www.googleapis.com/books/v1/users/' + userId + '/bookshelves/' + bookshelfId + '/volumes?maxResults=40',
        );
        const loadedBooks = data?.items?.map((item: any) => {
          let newBook = {
            id: generateUniqId(),
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            year: item.volumeInfo.publishedDate,
            img: item.volumeInfo.imageLinks.thumbnail,
          };
          return newBook;
        });
        setBooks(loadedBooks);
      } catch (error) {
        console.error('Failed when try to get books, Error: ', error);
      }
    };
    getBooks();
  }, []);

  const value = {
    books,
    setBooks,
    filteredBooks,
    setFilteredBooks,
    selectedBook,
    setSelectedBook,
    shouldShowAddBookModal,
    setShouldShowAddBookModal,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookProvider;
