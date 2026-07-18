'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <nav aria-label="Project pagination" className="flex items-center gap-4">
      {hasPreviousPage ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded border px-4 py-2"
        >
          Previous
        </Link>
      ) : (
        <span className="rounded border px-4 py-2 text-gray-400">
          Previous
        </span>
      )}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {hasNextPage ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded border px-4 py-2"
        >
          Next
        </Link>
      ) : (
        <span className="rounded border px-4 py-2 text-gray-400">
          Next
        </span>
      )}
    </nav>
  );
}