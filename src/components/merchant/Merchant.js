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

    toggleEdit = () => this.setState({ edit: !this.state.edit });

    toggleBids = () => this.setState({ bids: !this.state.bids });

    sortBidsAsc  = (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime();
    sortBidsDesc = (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime();

    removeMerchant = () => this.props.removeMerchant(this.props.id);

    render() {
        const isPremium = (this.props.hasPremium) ? 'merchant__premium' : '';
        const bids = this.props.bids.sort(this.sortBidsDesc);

        return (
            <div className={`merchant__item`}>
                <div className={`merchant__details ${isPremium}`}>
                    <div className={`merchant__details--image`}>
                        <img alt="Avatar" src={ this.props.avatarUrl } />
                    </div>
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
                        {bids.map(bid => { 
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