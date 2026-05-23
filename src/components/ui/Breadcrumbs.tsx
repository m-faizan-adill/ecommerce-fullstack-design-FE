'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb" className="py-2 text-sm font-normal">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
  
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          
          let label = decodeURIComponent(segment)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()); 

          if (label.toLowerCase() === "mens wear") {
            label = "Men's wear";
          }

          return (
            <li key={href} className="inline-flex items-center">
              {/* Chevron Icon separator */}
              <svg
                className="mx-2 h-3 w-3 text-gray-400"
                aria-hidden="true"
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m1 9 4-4-4-4"
                />
              </svg>

              {isLast ? (
                <span className="text-gray-500 font-medium cursor-default">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}