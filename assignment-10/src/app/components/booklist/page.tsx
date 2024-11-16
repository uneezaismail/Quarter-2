
'use client'
import React, { useEffect, useState } from 'react';
import BookCard from '../bookcard/page';

interface Book {
  id: number;
  title: string;
  img: string;
  category: string;
  author: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('/api/books');
        const data: Book[] = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, []);

  // Get unique categories
  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="flex items-center flex-col p-1 sm:p-3 w-full">
        <h2 className=' flex items-center justify-center mt-10 text-5xl text-red-600 border-b-2 border-red-600'>All Books</h2>
        <hr className='text-black'/>
      {categories.map((category) => (
        <div key={category} className="my-10 md:my-20 flex flex-col items-center">
          <h2 className="text-3xl lg:text-4xl m-10">{category} Books</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-5 sm:gap-5">
            {books
              .filter((book) => book.category === category)
              .map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Books;



// 'use client'
// import React, { useEffect, useState } from 'react';
// import Header from '../header/page'; 
// import BookCard from '../bookcard/page';
// import Hero from '../hero/page';

// interface Book {
//   id: number;
//   title: string;
//   img: string;
//   category: string;
//   author: string;
// }

// const Books: React.FC = () => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>(''); 

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const res = await fetch('/api/books');
//         const data: Book[] = await res.json();
//         setBooks(data);
//       } catch (error) {
//         console.error('Failed to fetch books:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // Filter books by title or author based on the search query
//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Get unique categories from filtered books
//   const categories = [...new Set(filteredBooks.map((book) => book.category))];

//   return (
//     <div>
//       <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <Hero/>
//       <div className="flex items-center flex-col p-1 sm:p-3 w-full">
//         <h2 className="flex items-center justify-center mt-10 text-5xl text-red-600 border-b-2 border-red-600">All Books</h2>
//         <hr className="text-black" />
//         {categories.map((category) => (
//           <div key={category} className="my-10 md:my-20 flex flex-col items-center">
//             <h2 className="text-3xl lg:text-4xl m-10">{category} Books</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-5 sm:gap-5">
//               {filteredBooks
//                 .filter((book) => book.category === category)
//                 .map((book) => (
//                   <BookCard key={book.id} book={book} />
//                 ))}
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;
