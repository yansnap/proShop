import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
import Paginate from '../components/Paginate.js';
import ProductCarousel from '../components/ProductCarousel.js';
import { listProducts } from '../actions/productActions.js';
import { useSearchParams } from 'react-router-dom';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const [searchParams] = useSearchParams();
  let keyword = searchParams.toString();

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}
export default HomeScreen;
