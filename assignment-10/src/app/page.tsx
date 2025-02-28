'use client'
import React, { useState, useEffect } from 'react';
import { Book } from './types/book';
import BooksList from './components/booklist/page';
import EditBookForm from './components/editbooks/page';
import AddBookForm from './components/addbook/page';
import Hero from './components/hero/page';

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
    <main>
      <Hero/>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-red-600 my-4">Book Collection</h1>

      {!editingBook && !isAdding && (
        <>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded mb-4"
          >
            Add New Book
          </button>
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
    </main>
  );
};

export default Home;
