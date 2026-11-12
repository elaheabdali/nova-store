'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProductGrid } from './ProductGrid';
import { Footer } from './Footer';

export function StorefrontExperience() {
  const [searchValue, setSearchValue] = useState('');
<<<<<<< HEAD
  return (
    <>
      <Header searchValue={searchValue} onSearchChange={setSearchValue} />
      <main>
        <Hero />
        <ProductGrid searchValue={searchValue} />
      </main>
      <Footer />
    </>
  );
=======
  return <><Header searchValue={searchValue} onSearchChange={setSearchValue}/><main><Hero/><ProductGrid searchValue={searchValue}/></main><Footer/></>;
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
}
