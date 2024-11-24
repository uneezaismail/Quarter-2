import { Book } from "@/app/types/book";
import Image from "next/image";
import React from "react";

interface BooksListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (book: Book) => void;
}

const BooksList: React.FC<BooksListProps> = ({ books, onDelete, onEdit }) => {
  return (
    <div className="lg:w-[90%] mx-auto grid gap-6 gap-y-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 ">
      {books.map((book) => (
        <div key={book.id} className=" w-fit mx-auto transition transform">
          <div className="hover:-translate-y-1 mx-auto w-64 sm:w-80 h-[300px] md:h-[400px] relative overflow-hidden">
            <Image
              src={book.image}
              alt={book.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col py-2">
            <h3 className="text-2xl lg:text-2xl font-semibold font-serif mt-2">
              {book.title}
            </h3>
            <p className="text-gray-600  mb-4 text-xl my-2">{book.author}</p>
            <div className="flex space-x-4 justify-between">
              <button
                onClick={() => onEdit(book)}
                className="text-md sm:text-xl border-2 border-black rounded-3xl hover:bg-black hover:border-none hover:text-white  px-5 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(book.id)}
                className="text-md sm:text-xl border-2 border-black rounded-3xl  px-3 py-1 hover:border-none  hover:bg-red-600 hover:text-white"
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
