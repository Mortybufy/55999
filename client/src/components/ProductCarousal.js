import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listTopProducts } from "../actions/productActions";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";

const ProductCarousal = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel style={{height: '80vh'}} pause="hover" className="carousel bg-dark">
      {products &&
        products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Image style={{width: '800px', height: '500px'}} src={product.image} alt={product.name} fluid />
              <Carousel.Caption className="carousal-caption">
                <h2>
                  {product.name}
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default ProductCarousal;
