import React from "react";
import ReactDOM from "react-dom";
import Pagination from '@material-ui/lab/Pagination';




export default function PaginationRounded({ restsPerPage, totalRests, paginate }) {
 
  const pageNumbers = [];

for (let i = 1; i <= Math.ceil(totalRests / restsPerPage); i++) {
  pageNumbers.push(i);
}
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};