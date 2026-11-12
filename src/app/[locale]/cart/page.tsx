import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CartPageClient } from '@/components/CartPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('cart');
<<<<<<< HEAD
  return {
    title: `${t('title')} | NOVA`,
    robots: { index: false, follow: true },
  };
=======
  return { title: `${t('title')} | NOVA`, robots: { index: false, follow: true } };
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
}

export default function CartPage() {
  return <CartPageClient />;
}
