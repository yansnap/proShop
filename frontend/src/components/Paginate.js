import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
    const start = keyword.indexOf("=") + 1; // Find the index after '='
    const end = keyword.indexOf("&"); // Find the index before '&'
    const newKeyword = keyword.substring(start, end);
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
                !isAdmin
                  ? { pathname: '/', search: `?keyword=${newKeyword}&page=${x + 1}` }
                  : {
                      pathname: '/admin/productlist',
                      search: `?keyword=${newKeyword}&page=${x + 1}`,
                    }
              }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;