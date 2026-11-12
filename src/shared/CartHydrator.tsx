'use client';

import { useEffect } from 'react';
import { useCartStore } from '../storage/cartStore';

export function CartHydrator() {
<<<<<<< HEAD
  useEffect(() => {
    void useCartStore.persist.rehydrate();
  }, []);
=======
  useEffect(() => { void useCartStore.persist.rehydrate(); }, []);
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  return null;
}
