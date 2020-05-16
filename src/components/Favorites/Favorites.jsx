import React from 'react';
import './Favorites.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import backArrow from '../../assets/images/icons/back-arrow.svg';
import homeIcon from '../../assets/images/icons/home-icon.svg';
import { ProductCard } from '../Phones/ProductCard/ProductCard';
import { favoritePhonesPropType } from '../../propTypesConstants';

export const Favorites = (props) => {
  const {
    favoritePhones,
    addToCart,
    itemPrice,
    phones,
  } = props;

  const favoriteList = phones
    .filter(phone => favoritePhones.includes(phone.id));

  return (
    <div className="catalog">
      <div className="content-heading">
        <div className="favorites__navigation">
          <NavLink to="/" className="favorites__back-link">
            <img
              src={homeIcon}
              alt="back arrow navigation"
              className="favorites__back-arrow"
            />
            <img
              src={backArrow}
              alt="back arrow navigation"
              className="favorites__back-arrow"
            />
            <span className="favorites__back-link">Home</span>
          </NavLink>
        </div>
        <h1 className="content-heading__title">Favorites</h1>
        <p className="content-heading__count">
          {`${favoritePhones.length} phones`}
        </p>
      </div>

      <ul className="catalog__product-list">

        {favoriteList.map(favoritePhone => (
          <li className="catalog__product-item">
            <ProductCard
              {...favoritePhone}
              addToCart={addToCart}
              itemPrice={itemPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

Favorites.propTypes = {
  favoritePhones: favoritePhonesPropType.isRequired,
  addToCart: PropTypes.func.isRequired,
  itemPrice: PropTypes.number.isRequired,
};
