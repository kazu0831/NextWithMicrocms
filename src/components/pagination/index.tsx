import Link from "next/link";
import React from "react";

interface PaginationProps {
  totalCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount }) => {
  const PER_PAGE = 6;
  const pages = Math.ceil(totalCount / PER_PAGE);

  return (
    <ul className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2">
      {Array.from({ length: pages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <li key={pageNumber} className="px-3">
            <Link className="hover:text-gray-500" href={`/blog/page/${pageNumber}`}>{pageNumber}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Pagination;
