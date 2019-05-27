import React from 'react';
import PropTypes from 'prop-types';
import Merchant from './Merchant';
import MerchantForm from './MerchantForm';
import { connect } from 'react-redux';
import { addMerchant } from '../../actions';

import './merchant.css';

const MerchList = ({merchants, addMerchant}) => (
    <div className="merchant__list">
        {
            merchants.map(merchant => 
                <Merchant data={merchant} key={merchant.id} />
            )
        }

        {/* <button onClick={() => addMerchant('5')}>Add merch</button> */}

        <MerchantForm />:
    </div>
);

MerchList.PropTypes = {
    merchants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        hasPremium: PropTypes.bool.isRequired,
        bids: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            carTitle: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            created: PropTypes.string.isRequired,
        })).isRequired,
    }).isRequired).isRequired,
}

const mapStateToProps = state => ({
    merchants: state.merchants
});

const mapDispatchToProps = dispatch => ({
    addMerchant: id => dispatch(addMerchant(id))
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MerchList);