'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';
import { buildPageNumbers, cn, ELLIPSIS } from '@/lib/utils';

const CoinsPagination = ({ currentPage, totalPages, hasMorePages }: Pagination) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    router.push(`/coins?page=${page}`);
  };

  const handlePrevious = () => {
    if (currentPage <= 1) return;
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    const isLastPage = !hasMorePages || currentPage === totalPages;
    if (isLastPage) return;
    handlePageChange(currentPage + 1);
  };

  const pageNumbers = buildPageNumbers(currentPage, totalPages);
  const isLastPage = !hasMorePages || currentPage === totalPages;

  return (
    <Pagination id="coins-pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-control prev">
          <PaginationPrevious
            onClick={handlePrevious}
            className={currentPage === 1 ? 'control-disabled' : 'control-button'}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
          />
        </PaginationItem>

        <div className="pagination-pages">
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === ELLIPSIS ? (
                <span className="ellipsis">...</span>
              ) : (
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  className={cn('page-link', {
                    'page-link-active': currentPage === page,
                  })}
                  aria-disabled={currentPage === page}
                  tabIndex={currentPage === page ? -1 : 0}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <PaginationItem className="pagination-control next">
          <PaginationNext
            onClick={handleNext}
            className={isLastPage ? 'control-disabled' : 'control-button'}
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : 0}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CoinsPagination;