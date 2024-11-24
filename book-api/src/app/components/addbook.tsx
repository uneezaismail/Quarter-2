// AddBookForm.tsx
"use client";
import { Book } from "@/app/types/book";
import React, { useState } from "react";

interface AddBookFormProps {
  onAdd: (newBook: Book) => void;
  onCancel: () => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Book>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newBook = await response.json();
    onAdd(newBook);
    setFormData({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mb-6 p-4 bg-white shadow rounded"
    >
      <h2 className="bg-red-600 text-white flex justify-center text-2xl font-bold mb-4 p-4">
        Add New Book
      </h2>
      <div className="mb-4">
        <label className="block font-medium">Title</label>
        <input
          type="text"
          value={formData.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Author</label>
        <input
          type="text"
          value={formData.author || ""}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Image URL</label>
        <input
          type="text"
          value={formData.image || ""}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded "
      >
        Add Book
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddBookForm;
