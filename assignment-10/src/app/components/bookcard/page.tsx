// // components/BookCard.tsx
// import Image from 'next/image';
// import React from 'react';

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   pages: number;
//   img: string;
// }

// interface BookCardProps {
//   book: Book;
// }

// const BookCard: React.FC<BookCardProps> = ({ book }) => {
//   return (
//     <div className=" p-4 rounded-lg shadow-md flex flex-col items-center">
//         <div className=''>  <Image src={"/comic-1.jpg"} alt={book.title} width={150} height={100} className=" object-cover mb-2 rounded" /></div>
//       <h3 className="text-lg font-semibold">{"kill or be Killed"}</h3>
//       <p className="text-gray-600">{"james patterson"}</p>
//       <p className="text-gray-500">{1990} pages</p>
//       <div className="flex space-x-4 mt-2">
//         <button className="text-red-600 hover:text-red-800">❤️ Like</button>
//         <button className="text-blue-600 hover:text-blue-800">🔖 Bookmark</button>
//       </div>
//     </div>
//   );
// };

// export default BookCard;


// components/BookCard.tsx
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaBookmark, FaHeart } from 'react-icons/fa6';

interface Book {
  id: number;
  title: string;
  img: string;
  category: string;
  author: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book}) => {
  return (
    <div className="flex flex-col items-center p-1 sm:p-6">
  <img
    src={"/comic-1.jpg"}
    alt={book.title}
    className="w-full aspect-[3/4] object-cover"
  />
  <div className="mt-4 text-center w-full">
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{book.title}</h3>
    <p className="text-md md:text-lg text-gray-600">{book.author}</p>
    <Button
      className="w-full mt-4 px-4 py-2 bg-red-600 text-white text-xl md:text-2xl rounded-none hover:bg-black"
    >
      Start Reading
    </Button>
  </div>
</div>

  );
};

export default BookCard;
