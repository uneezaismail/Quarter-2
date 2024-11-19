import { Book } from "@/app/types/book";
import { NextRequest, NextResponse } from "next/server";

let books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/atomic-habit.jpg",
  },
  {
    id: 2,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    image: "/the-power.jpg",
  },
  {
    id: 3,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "/think-and-grow-rich.webp",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    image: "/deep-work.jpg",
  },
  {
    id: 5,
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    image: "/gifts-of-imperfection.jpg",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "/rich-dad.jpg",
  },
];

export async function GET() {
  return NextResponse.json(books, { status: 200 });
}

export async function POST(req: NextRequest) {
  const newBook: Book = await req.json();
  newBook.id = Date.now(); 
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  books = books.filter((book) => book.id !== id);
  return NextResponse.json({ message: "Book deleted" }, { status: 200 });
}

export async function PUT(req: NextRequest) {
  const updatedBook: Book = await req.json();
  books = books.map((book) =>
    book.id === updatedBook.id ? updatedBook : book
  );
  return NextResponse.json(updatedBook, { status: 200 });
}
