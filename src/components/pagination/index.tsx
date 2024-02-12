import Link from "next/link";
import React from "react";

interface PaginationProps {
  totalCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount }) => {
  const PER_PAGE = 6;
  const pages = Math.ceil(totalCount / PER_PAGE);

  return (
    <ul>
      {Array.from({ length: pages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <li key={pageNumber}>
            <Link href={`/blog/page/${pageNumber}`}>{pageNumber}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Pagination;
