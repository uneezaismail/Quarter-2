// app/page.tsx
import React from 'react';
import Hero from './components/hero/page';
import Books from './components/booklist/page';

const HomePage: React.FC = () => {
  return (
    <main className='main'>


      
      <Hero/>
      <Books/>
    </main>
  );
};

export default HomePage;
