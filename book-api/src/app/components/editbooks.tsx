"use client";
import { Book } from "@/app/types/book";
import React, { useState } from "react";

interface EditBookFormProps {
  currentBook: Book;
  onUpdate: (updatedBook: Book) => void;
  onCancel: () => void;
}

const EditBookForm: React.FC<EditBookFormProps> = ({
  currentBook,
  onUpdate,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Book>>(currentBook);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/books", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const updatedBook = await response.json();
    onUpdate(updatedBook);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mb-6 p-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>

      {/* Title Input */}
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

      {/* Author Input */}
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

      {/* Image URL Input */}
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

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded"
        >
          Update Book
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditBookForm;
