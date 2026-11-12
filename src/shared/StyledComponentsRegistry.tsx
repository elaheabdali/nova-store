'use client';

import { useState, type ReactNode } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

<<<<<<< HEAD
export function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
=======
export function StyledComponentsRegistry({ children }: { children: ReactNode }) {
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
  const [sheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });
  if (typeof window !== 'undefined') return <>{children}</>;
<<<<<<< HEAD
  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
=======
  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>;
>>>>>>> bb75746b6ef26902bb890776ef7773221b969740
}
