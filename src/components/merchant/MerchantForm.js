import React from 'react';

import { connect } from 'react-redux';
import { editMerchant, addMerchant } from '../../actions';

class MerchantForm extends React.Component {
    constructor(props) {
        super(props);

        this.skeleton = {
            id: '',
            firstname: '',
            lastname: '',
            avatarUrl: '',
            email: '',
            phone: '',
            hasPremium: false,
            bids: []
        }

        this.state = {...this.skeleton, ...props.merchant};
    }

    onSubmit = event => {
        event.preventDefault();
        
        if(this.state.id) {
            this.props.toggleEdit();
            this.props.editMerchant(this.state.id, this.state);
            return;
        }

        this.props.addMerchant('5', this.state);
        this.setState({...this.skeleton});
    }

    onChange = event => {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    render() {
        const { firstname, lastname, avatarUrl, email, phone, hasPremium } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input name="firstname" type="text" value={firstname} onChange={this.onChange} />
                <input name="lastname" type="text" value={lastname} onChange={this.onChange} />
                <input name="avatarUrl" type="url" value={avatarUrl} onChange={this.onChange} />
                <input name="email" type="email" value={email} onChange={this.onChange} />
                <input name="phone" type="tel" value={phone} onChange={this.onChange} />
                <input name="hasPremium" type="checkbox" value={hasPremium} onChange={this.onChange} />
                {/* <input name="" type="" value={} onChange={this.onChange} /> */}


                <button>Save</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addMerchant: (id, data) => dispatch(addMerchant(id, data)),
    editMerchant: (id, data) => dispatch(editMerchant(id, data))
})
  
export default connect(
    null,
    mapDispatchToProps
)(MerchantForm);