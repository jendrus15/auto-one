import React, { Component } from 'react';
import MerchantForm from './MerchantForm';
import { connect } from 'react-redux';
import { removeMerchant } from '../../actions';

function MerchantShow(props) {
    const { id, firstname, lastname, avatarUrl, email, phone } = props.merchant;
    
    return (
        <div className="merchant__details">
            <img alt="Avatar" src={avatarUrl} />
            <div>{ firstname }</div>
            <div>{ lastname }</div>
            <div>{ email }</div>
            <div>{ phone }</div>

            <button onClick={() => {props.toggleEdit()}}>Edit</button>
            <button onClick={() => props.removeMerchant(id)}>Remove</button>
        </div>
    )
}

class Merchant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            merchant: props.data,
            edit: false
        };
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    render() {
        return (this.state.edit) ? 
            <MerchantForm merchant={this.state.merchant}
                          toggleEdit={this.toggleEdit}  />:
            <MerchantShow merchant={this.state.merchant} 
                          toggleEdit={this.toggleEdit} 
                          removeMerchant={this.props.removeMerchant}/>;
    }
}

// export default Merchant;

// const mapStateToProps = state => ({
//     merchants: state.merchants
// });

const mapDispatchToProps = dispatch => ({
    removeMerchant: id => dispatch(removeMerchant(id))
});
  
export default connect(
    null,
    mapDispatchToProps
)(Merchant);