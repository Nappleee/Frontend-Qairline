import React from 'react';
import './Pagination.css';
function Pagination({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <div className="pagination">
      <button
        className="page-btn prev"
        onClick={onPrev}
        disabled={currentPage <= 1} // Vô hiệu hóa khi đang ở trang đầu tiên
      >
        &lt; Previous
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="page-btn next"
        onClick={onNext}
        disabled={currentPage >= totalPages} // Vô hiệu hóa khi đang ở trang cuối
      >
        Next &gt;
      </button>
    </div>
  );
}

export default Pagination;
