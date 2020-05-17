import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setCartId as setCartIdStore,
  setPriceToAmount as setPriceToAmountStore,
  setQuantityToTotal as setQuantityToTotalStore,
} from '../../redux/reducers/actionCreators';
import { addedPhonesPropType } from '../../propTypesConstants';

const AddToCartButton = (props) => {
  const {
    id,
    setCartId,
    addedPhones,
    setPriceToAmount,
    setQuantityToTotal,
  } = props;

  const price = 199;

  return (
    <>
      {!Object.keys(addedPhones).includes(id)
        ? (
          <button
            className="card__add-to-cart"
            type="button"
            onClick={() => {
              const phone = {
                id,
                quantity: 1,
              };

              setCartId(phone);
              setPriceToAmount(price);
              setQuantityToTotal(1);
            }}
          >
            Add to cart
          </button>

        ) : (
          <button
            className="card__add-to-cart card__add-to-cart--added"
            type="button"
            disabled
          >
            Added to cart
          </button>
        )}

    </>
  );
};

const mapStateToProps = (state) => ({
  addedPhones: state.phonesPage.addedPhones,
});

const mapDispatchToProps = {
  setCartId: setCartIdStore,
  setPriceToAmount: setPriceToAmountStore,
  setQuantityToTotal: setQuantityToTotalStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);

AddToCartButton.propTypes = {
  id: PropTypes.string.isRequired,
  setCartId: PropTypes.func.isRequired,
  setPriceToAmount: PropTypes.func.isRequired,
  setQuantityToTotal: PropTypes.func.isRequired,
  addedPhones: addedPhonesPropType.isRequired,
};
