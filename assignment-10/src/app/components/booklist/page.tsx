import { Book } from '@/app/types/book';
import React from 'react';

interface BooksListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (book: Book) => void;
}

const BooksList: React.FC<BooksListProps> = ({ books, onDelete, onEdit }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.id}
          className="shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
        >
            
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-48 object-cover rounded-t-sm"
          />
          <div className="flex flex-col items-center p-4">
            <h3 className="text-xl lg:text-2xl font-semibold">{book.title}</h3>
            <p className="text-gray-600 italic mb-4 text-xl my-4">by {book.author}</p>
            <div className="flex space-x-4 justify-between">
              <button
                onClick={() => onEdit(book)}
                className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(book.id)}
                className="bg-black text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
