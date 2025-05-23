import { Book } from "@/app/types/book";
import { NextRequest, NextResponse } from "next/server";

let books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/comic-1.jpg",
  },
  {
    id: 2,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    image: "/comic-1.jpg",
  },
  {
    id: 3,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "/images/think-and-grow-rich.jpg",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    image: "/images/deep-work.jpg",
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    image: "/images/sapiens.jpg",
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    image: "/images/7-habits.jpg",
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(books, { status: 200 });
}

export async function POST(req: NextRequest) {
  const newBook: Book = await req.json();
  newBook.id = Date.now(); // Generate unique ID
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
