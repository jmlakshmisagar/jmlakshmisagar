'use client';

import { useEffect } from 'react';

export default function ServiceWorkerInit() {
  useEffect(() => {
    const registerSW = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered:', registration.scope);
        } catch (err) {
          console.error('SW registration failed:', err);
        }
      }
    };

    registerSW();
  }, []);

  return null;
}