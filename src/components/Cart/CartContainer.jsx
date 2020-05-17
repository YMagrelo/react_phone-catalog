import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Cart } from './Cart';
import {
  addedPhonesPropType,
  phonesPropType,
} from '../../propTypesConstants';

const CartContainer = (props) => {
  const {
    addedPhones,
    phones,
    totalPrice,
    totalCount,
  } = props;

  const cartList = phones
    .filter(phone => Object.keys(addedPhones).includes(phone.id));

  return (
    <Cart
      cartList={cartList}
      totalPrice={totalPrice}
      totalCount={totalCount}
      addedPhones={addedPhones}
    />
  );
};

const mapStateToProps = (state) => ({
  addedPhones: state.phonesPage.addedPhones,
  phones: state.phonesPage.phones,
  totalPrice: state.phonesPage.totalPrice,
  totalCount: state.phonesPage.totalCount,
});

export default connect(mapStateToProps, null)(CartContainer);

CartContainer.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  addedPhones: addedPhonesPropType.isRequired,
  phones: phonesPropType.isRequired,
};
