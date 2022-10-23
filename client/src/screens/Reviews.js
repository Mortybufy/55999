import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";

const Reviews = ({ match }) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  return (
    <>
      <ListGroup variant="flush">
        {product.reviews.slice(2).map((review) => (
          <ListGroup.Item key={review._id}>
            <strong>{review.name}</strong>
            <Rating value={review.rating} />
            <p>{review.createdAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Reviews;
