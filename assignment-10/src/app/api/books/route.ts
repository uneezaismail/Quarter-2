// app/api/book/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface Book {
    id: number;
    title: string;
    img: string;
    category: string;
    author: string;
  }
  
  let books: Book[] = [

    // Comic Books
    { id: 5, title: "Heroes United", img: 'https://images.unsplash.com/photo-1604022699469-e5291786b036', category: "Comic", author: "Maxwell Sterling" },
    { id: 6, title: "Villains' Uprising", img: 'https://images.unsplash.com/photo-1610310239775-fb8a3788c24b', category: "Comic", author: "Kara Knight" },
    { id: 7, title: "The Silent Knight", img: 'https://images.unsplash.com/photo-1606180781400-97e4f1b40765', category: "Comic", author: "Oliver Grant" },
    { id: 8, title: "Galactic Guardians", img: 'https://images.unsplash.com/photo-1600104627212-dc4f7b2a31d2', category: "Comic", author: "Zane Waters" },

    // Science Fiction Books
    { id: 9, title: "Galactic Shadows", img: 'https://images.unsplash.com/photo-1516572884799-1287f9e31f62', category: "Science Fiction", author: "Theo Kincaid" },
    { id: 10, title: "The Celestial Map", img: 'https://images.unsplash.com/photo-1563311891-970b2208352f', category: "Science Fiction", author: "Zara Eldridge" },
    { id: 11, title: "Cybernetic Rebellion", img: 'https://images.unsplash.com/photo-1600102290768-736d041fc5d3', category: "Science Fiction", author: "Evan Morrow" },
    { id: 12, title: "Children of the Void", img: 'https://images.unsplash.com/photo-1576094465695-c8a8045e3886', category: "Science Fiction", author: "Nina Silver" },

    // Non-Fiction Books
    { id: 17, title: "Understanding the Universe", img: 'https://images.unsplash.com/photo-1543798530-5a82a7467558', category: "Non-Fiction", author: "Professor Clara Briggs" },
    { id: 18, title: "The Art of Happiness", img: 'https://images.unsplash.com/photo-1595934016011-cf3d64772c35', category: "Non-Fiction", author: "Sophia Richards" },
    { id: 19, title: "Living Mindfully", img: 'https://images.unsplash.com/photo-1500599909607-cc8d4fd65c9e', category: "Non-Fiction", author: "Jason Wells" },
    { id: 20, title: "Exploring Humanity", img: 'https://images.unsplash.com/photo-1533231128501-3f52c9b95e1d', category: "Non-Fiction", author: "Leonard Grant" },

    // Fantasy Books
    { id: 21, title: "Realm of Dragons", img: 'https://images.unsplash.com/photo-1569940760-6f57ff6f1cb7', category: "Fantasy", author: "Lysandra Storm" },
    { id: 22, title: "The Wizard's Quest", img: 'https://images.unsplash.com/photo-1571745302206-6a9c4b3d7c8e', category: "Fantasy", author: "Aiden Birch" },
    { id: 23, title: "The Elven Prophecy", img: 'https://images.unsplash.com/photo-1565253995-09ffb82c35da', category: "Fantasy", author: "Maeve Galadriel" },
    { id: 24, title: "The Dark Kingdom", img: 'https://images.unsplash.com/photo-1580369848317-c1c2f94d035d', category: "Fantasy", author: "Viktor Crowe" },

    // Self-Help Books
    { id: 25, title: "The Power of Positivity", img: 'https://images.unsplash.com/photo-1575010710666-5a61542150f1', category: "Self-Help", author: "Marissa Dove" },
    { id: 26, title: "Master Your Mind", img: 'https://images.unsplash.com/photo-1563444675-72d3e9c4f22b', category: "Self-Help", author: "Graham Preston" },
    { id: 27, title: "Awaken the Giant Within", img: 'https://images.unsplash.com/photo-1579370318440-d29ffbf745cd', category: "Self-Help", author: "Anthony Robbins" },
    { id: 28, title: "Habit Transformation", img: 'https://images.unsplash.com/photo-1589254066217-898cfd152f6a', category: "Self-Help", author: "James Clear" },
];

  

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
    
        // Extract query parameters for filtering
        const id = searchParams.get("id");
        const title = searchParams.get("title");
        const category = searchParams.get("category");
        const author = searchParams.get("author");

        // Start with the full books array
        let filteredBooks = books;
    
        // Apply filters based on query parameters
        if (id) {
          const idNumber = parseInt(id);
          if (isNaN(idNumber)) {
            return NextResponse.json(
              { error: "Invalid 'id' parameter" },
              { status: 400 }
            );
          }
          filteredBooks = filteredBooks.filter((book) => book.id === idNumber);
        }
    
        if (category) {
          filteredBooks = filteredBooks.filter((book) => 
            book.category.toLowerCase() === category.toLowerCase()
          );
        }
    
        if (title) {
          filteredBooks = filteredBooks.filter((book) =>
            book.title.toLowerCase().includes(title.toLowerCase())
          );
        }

        if (author) {
            filteredBooks = filteredBooks.filter((book) =>
              book.author.toLowerCase().includes(author.toLowerCase())
            );}
    
        return NextResponse.json(filteredBooks, { status: 200 });
      } catch (error) {
        console.error("Error fetching books:", error);
        return NextResponse.json(
          { error: "An error occurred while processing your request." },
          { status: 500 }
        );
      }
}
