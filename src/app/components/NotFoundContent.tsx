'use client';

import { usePathname } from 'next/navigation';

export default function NotFoundContent() {
  const pathname = usePathname();

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        No page found at <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{pathname}</code>
      </p>
    </div>
  );
}
