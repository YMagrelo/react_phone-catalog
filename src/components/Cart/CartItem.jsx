import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import './CartItem.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import removeIcon from '../../assets/images/icons/remove-icon.svg';
import {
  deleteCartId as deleteCartIdStore,
  setPriceToAmount as setPriceToAmountStore,
  setQuantityToTotal as setQuantityToTotalStore,
  setCartId as setCartIdStore,
} from '../../redux/reducers/actionCreators';
import { addedPhonesPropType } from '../../propTypesConstants';

const CartItem = (props) => {
  const {
    phone,
    addedPhones,
    phoneQuantity,
    deleteCartId,
    setPriceToAmount,
    setQuantityToTotal,
    setCartId,
  } = props;

  const price = 199;

  const [quantity, setQuantity] = useState(phoneQuantity);

  const decreaseQuantity = useCallback(
    () => {
      setQuantity(quantity - 1);
      setPriceToAmount(-price);
      setQuantityToTotal(-1);
      setCartId({
        id: phone.id,
        quantity: quantity - 1,
      });
    },
    [phone, quantity, setPriceToAmount, setQuantityToTotal, setCartId],
  );

  const increaseQuantity = useCallback(
    () => {
      setQuantity(quantity + 1);
      setPriceToAmount(price);
      setQuantityToTotal(1);
      setCartId({
        id: phone.id,
        quantity: quantity + 1,
      });
    },
    [quantity, phone, setPriceToAmount, setQuantityToTotal, setCartId],
  );

  const deletePhoneFromCart = useCallback(
    () => {
      const newCart = { ...addedPhones };

      delete newCart[phone.id];

      deleteCartId(newCart);
      setPriceToAmount(-(quantity * price));
      setQuantityToTotal(-quantity);
    },
    [
      quantity,
      phone,
      addedPhones,
      deleteCartId,
      setPriceToAmount,
      setQuantityToTotal,
    ],
  );

  return (
    <div className="cartItem">
      <button
        className="cartItem__delete"
        type="button"
        onClick={deletePhoneFromCart}
      >
        <img
          src={removeIcon}
          alt="delete icon"
          className="cartItem__delete-icon"
        />
      </button>
      <img src={phone.imageUrl} alt="phone" className="cartItem__image" />
      <NavLink
        to={`/phones/${phone.id}`}
        className="cartItem__name"
      >
        {phone.name}
      </NavLink>
      <div className="cartItem__change-price-box">
        {quantity === 1 ? (
          <button
            className="cartItem__button cartItem__button--disabled"
            type="button"
            disabled
          >
            -
          </button>
        ) : (
          <button
            className="cartItem__button cartItem__button--min"
            type="button"
            onClick={decreaseQuantity}
          >
            -
          </button>
        )}

        <span className="cartItem__item-count">{quantity}</span>
        <button
          className="cartItem__button cartItem__button--plus"
          type="button"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      <h2 className="cartItem__itemsPrice">{`$${price * quantity}`}</h2>

    </div>
  );
};

const mapDispatchToProps = {
  deleteCartId: deleteCartIdStore,
  setPriceToAmount: setPriceToAmountStore,
  setQuantityToTotal: setQuantityToTotalStore,
  setCartId: setCartIdStore,
};

export default connect(null, mapDispatchToProps)(CartItem);

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleteCartId: PropTypes.func.isRequired,
  setQuantityToTotal: PropTypes.func.isRequired,
  setPriceToAmount: PropTypes.func.isRequired,
  setCartId: PropTypes.func.isRequired,
  addedPhones: addedPhonesPropType.isRequired,
};
