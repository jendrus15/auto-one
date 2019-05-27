import React from 'react';
import uuid from 'uuid';

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
            this.props.editMerchant(this.state.id, this.state);
            if(this.props.onSubmit) this.props.onSubmit();
            return;
        }

        const id = uuid.v4();

        this.props.addMerchant(id, {...this.state, ...{id}});
        this.setState({...this.skeleton});

        if(this.props.onSubmit) this.props.onSubmit();
    }

    onChange = event => {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    onOverlayClick = () => {
        if(this.props.onOverlayClick) this.props.onOverlayClick();
    }

    render() {
        const { firstname, lastname, avatarUrl, email, phone, hasPremium } = this.state;

        return (
            <div className={`merchant__form`}>
                <div onClick={this.onOverlayClick} className={`merchant__form--overlay`}></div>
                <form onSubmit={this.onSubmit}>
                    <div className={`merchant__form--field`}>
                        <div>Firstname</div>
                        <input name="firstname" type="text" value={firstname} onChange={this.onChange} />
                    </div>
                    <div className={`merchant__form--field`}>
                        <div>Lastname</div>
                        <input name="lastname" type="text" value={lastname} onChange={this.onChange} />
                    </div>
                    <div className={`merchant__form--field`}>
                        <div>Avatar URL</div>
                        <input name="avatarUrl" type="url" value={avatarUrl} onChange={this.onChange} />
                    </div>
                    <div className={`merchant__form--field`}>
                        <div>E-mail</div>
                        <input name="email" type="email" value={email} onChange={this.onChange} />
                    </div>
                    <div className={`merchant__form--field`}>
                        <div>Phone</div>
                        <input name="phone" type="tel" value={phone} onChange={this.onChange} />
                    </div>
                    <div className={`merchant__form--field`}>
                        <div>Premium</div>
                        <input name="hasPremium" type="checkbox" value={hasPremium} onChange={this.onChange} />
                    </div>


                    <button>Save</button>
                </form>
            </div>
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