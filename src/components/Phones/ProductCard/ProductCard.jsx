import React, { useState } from 'react';
import './ProductCard.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FavoriteButton from '../../Common/FavoriteButton';

export const ProductCard = (props) => {
  const {
    imageUrl,
    name,
    id,
    snippet,
    addToCart,
    itemPrice,
  } = props;

  const [isInCart, setInCart] = useState(false);

  const handleClick = (phoneId) => {
    addToCart(phoneId);
    setInCart(!isInCart);
  };

  return (
    <>
      <div className="card">
        <NavLink
          to={`/phones/${id}`}
          className="card__link"
        >
          <img
            src={imageUrl}
            alt="/"
            className="card__product-img"
          />

          {name}
        </NavLink>
        <p className="card__price">
          <span className="card__price-new">{`$${itemPrice}`}</span>
          <span className="card__price-old">$299</span>
        </p>
        <div className="card__product-details">
          <p className="card__snippet">{snippet}</p>
        </div>
        <div className="card__buttons">
          {isInCart ? (
            <button
              className="card__add-to-cart card__add-to-cart--added"
              type="button"
            >
              Added to cart
            </button>
          ) : (
            <button
              className="card__add-to-cart"
              type="button"
              onClick={() => handleClick(id)}
            >
              Add to cart
            </button>
          )}
          <FavoriteButton
            id={id}
          />
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
};
