import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
import { listProducts } from '../actions/productActions.js';
import { useSearchParams  } from 'react-router-dom';

function HomeScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const keyword = searchParams.get("keyword");
  console.log(keyword)
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
export default HomeScreen;
