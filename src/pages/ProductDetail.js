import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  let content;
  if (params.productId === 'p1') {
    content = <p>My first writen book</p>;
  } else if (params.productId === 'p2') {
    content = <p>My first bought carpet</p>;
  } else {
    content = <p>My first bought toy</p>;
  }

  return <section>{content}</section>;
};

export default ProductDetail;
