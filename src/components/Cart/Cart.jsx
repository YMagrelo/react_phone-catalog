import React from 'react';
import './Cart.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem';
import backArrow from '../../assets/images/icons/back-arrow.svg';
import { addedPhonesPropType } from '../../propTypesConstants';

export const Cart = (props) => {
  const {
    cartList,
    totalPrice,
    totalCount,
    addedPhones,
  } = props;

  return (
    <div className="cart">
      <div className="cart__navigation">
        <NavLink to="/phones/" className="cart__back-link">
          <img
            src={backArrow}
            alt="back arrow navigation"
            className="cart__back-arrow"
          />
          <span className="cart__back-link">Back</span>
        </NavLink>
      </div>

      <h1 className="cart__heading">Cart</h1>
      <div className="cart__content">
        <ul className="cart__list">
          {cartList.map(phone => (
            <li
              className="cart__item"
              key={phone.age}
            >
              <CartItem
                phone={phone}
                phoneQuantity={addedPhones[phone.id]}
                addedPhones={addedPhones}
                totalCount={totalCount}
              />
            </li>
          ))}
        </ul>
        <div className="cart__totalCount total">
          <h1 className="total__price">{`$${totalPrice}`}</h1>
          <p className="total__item-count">
            {`Total for ${totalCount} items`}
          </p>
          <div className="total__button-container">
            <button className="total__button" type="button">Checkout</button>
          </div>
        </div>
      </div>
    </div>

  );
};

Cart.propTypes = {
  addedPhones: addedPhonesPropType.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  cartList: addedPhonesPropType.isRequired,
};
