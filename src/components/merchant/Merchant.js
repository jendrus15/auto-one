import React, { Component } from 'react';
import MerchantForm from './MerchantForm';
import { connect } from 'react-redux';
import { removeMerchant } from '../../actions';

class Merchant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            bids: false,
        };
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit,
        });
    }

    toggleBids = () => {
        this.setState({
            bids: !this.state.bids,
        });
    }

    removeMerchant = () => {
        this.props.removeMerchant(this.props.id);
    }

    render() {
        const isPremium = (this.props.hasPremium) ? 'merchant__premium' : '';
        return (
            <div className={`merchant__item`}>
                <div className={`merchant__details ${isPremium}`}>
                    <img alt="Avatar" src={ this.props.avatarUrl } />
                    <div>{ this.props.firstname }</div>
                    <div>{ this.props.lastname }</div>
                    <div>{ this.props.email }</div>
                    <div>{ this.props.phone }</div>

                    <button onClick={this.toggleBids}>Bids</button>
                    <button onClick={this.toggleEdit}>Edit</button>
                    <button onClick={this.removeMerchant}>X</button>
                </div>

                {(this.state.bids) ? 
                    <div className={`merchant__details--bids`}>
                        {this.props.bids.map(bid => { 
                            return <div key={bid.id} className={`merchant__details--bid-item`}>
                                <div>{bid.carTitle}</div>
                                <div>{bid.amount}</div>
                                <div>{bid.created}</div>
                            </div>
                        })}
                    </div>:
                    null
                }


                {(this.state.edit) ? 
                    <MerchantForm 
                        merchant={this.props}
                        onSubmit={this.toggleEdit}
                        onOverlayClick={this.toggleEdit}
                    />: null}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeMerchant: id => dispatch(removeMerchant(id))
});
  
export default connect(
    null,
    mapDispatchToProps
)(Merchant);