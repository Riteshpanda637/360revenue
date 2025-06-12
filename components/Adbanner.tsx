'use client';

import { useEffect } from 'react';

export default function AdBanner() {
  useEffect(() => {
    try {
      // 👇 TypeScript-safe access using `as any`
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-client="ca-pub-7426456118888851"
      data-ad-slot="XXXXXXXXXX"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
