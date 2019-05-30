import React from 'react';
import PropTypes from 'prop-types';
import Merchant from './Merchant';
import MerchantForm from './MerchantForm';
import { connect } from 'react-redux';
import { addMerchant } from '../../actions';

import MerchantPagination from './MerchantPagination';

import './merchant.css';

class MerchantList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addForm: false,
            page: 1
        }
    }

    toggleForm = () => this.setState({ addForm: !this.state.addForm });

    goToPage = (page) => this.setState({ page });

    render() {

        const start = (this.state.page - 1) * this.props.max;
        const items = this.props.merchants.slice(start,start + this.props.max);

        return (
            <div>
                <div className="merchant__list">
                    {
                        items.map(merchant => 
                            <Merchant 
                                key={merchant.id} 
                                {...merchant}
                            />
                        )
                    }

                    { (this.state.addForm) ? 
                        <MerchantForm 
                            onSubmit={this.toggleForm}
                            onOverlayClick={this.toggleForm}
                        /> : 
                        null 
                    }
                </div>
                { 
                    (this.props.merchants.length > this.props.max) ? 
                        <MerchantPagination 
                            onNext={() => this.setState( { page: ++this.state.page } )}
                            onPrev={() => this.setState( { page: --this.state.page } )}
                            onExact={page => this.setState( { page } )}

                            pages={ Math.ceil(this.props.merchants.length / this.props.max) }
                        /> : 
                        null 
                }
                <button className={`merchant__button--add`} onClick={this.toggleForm}>+</button>
            </div>
        )
    }
}

MerchantList.PropTypes = {
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
)(MerchantList);