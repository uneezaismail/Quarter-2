// Home.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Book } from './types/book';
import EditBookForm from './components/editbooks';
import AddBookForm from './components/addbook';
import BooksList from './components/booklist';

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddBook = (newBook: Book) => {
    setBooks([...books, newBook]);
    setIsAdding(false);
  };

  const handleUpdateBook = (updatedBook: Book) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setEditingBook(null);
  };

  const handleDeleteBook = async (id: number) => {
    await fetch('/api/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen p-6 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 font-serif bg-blue-950 text-white p-4">Book Collection</h1>

      {!editingBook && !isAdding && (
        <>
        <div className='w-full flex justify-center items-center'>
          <button
            onClick={() => setIsAdding(true)}
            className=" bg-red-600 hover:bg-black text-white px-4 py-2 rounded mb-4"
          >
            Add New Book
          </button></div>
          <BooksList
            books={books}
            onDelete={handleDeleteBook}
            onEdit={setEditingBook}
          />
        </>
      )}

      {editingBook && (
        <EditBookForm
          currentBook={editingBook}
          onUpdate={handleUpdateBook}
          onCancel={() => setEditingBook(null)}
        />
      )}

      {isAdding && (
        <AddBookForm
          onAdd={handleAddBook}
          onCancel={() => setIsAdding(false)}  // Pass the onCancel handler
        />
      )}
    </div>
  );
};

export default Home;
