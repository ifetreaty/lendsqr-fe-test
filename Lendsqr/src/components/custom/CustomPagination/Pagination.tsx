import { ArrowLeftIcon, ArrowRightIcon } from "../../icons/Icons";

import "./Pagination.scss";

type TPaginationProps = {
  currentPage: number;
  rowsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<TPaginationProps> = ({
  currentPage,
  rowsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="pagination-arrow"
      >
        <ArrowLeftIcon />
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          disabled={page === currentPage || page === "..."}
          onClick={() =>
            handlePageChange(typeof page === "number" ? page : currentPage)
          }
          className={`pagination-page ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="pagination-arrow"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
