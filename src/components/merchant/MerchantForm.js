import React from 'react';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { editMerchant, addMerchant } from '../../actions';
import MerchantBidForm from './MerchantBidForm';

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

    submitForm = () => {

        const notRequired = ['id', 'hasPremium', 'bids'];
        let emptyField = false;
        
        for(const merchantElem in this.skeleton) {
            if(emptyField === true || notRequired.includes(merchantElem)) continue;
            
            // eslint-disable-next-line
            if(this.state[merchantElem] == false) emptyField = true;
        }

        if(emptyField) {
            alert('Please fill all fields');
            return false;
        }
        
        if(this.state.id) {
            this.props.editMerchant(this.state.id, this.state);
        } else {
            const id = uuid.v4();
            this.props.addMerchant(id, {...this.state, ...{id}});
        }

        if(this.props.onSubmit) this.props.onSubmit();
    }

    onChange = event => this.setState({ [event.target.name]: event.target.value });

    addBid = () => this.setState({ bids: [...this.state.bids, {id: uuid.v4(), added: true} ] });

    removeBid = index => {
        let dataCopy = [...this.state.bids].filter((bid, bid_index) => bid_index !== index);
        this.setState({ bids: [...dataCopy] });
    }

    onBidSubmit = (data, index) => {
        let dataCopy = [...this.state.bids];
        dataCopy[index] = data;

        this.setState({ bids: dataCopy });
    }

    onOverlayClick = () => {
        if(this.props.onOverlayClick) this.props.onOverlayClick();
    }

    render() {
        const { firstname, lastname, avatarUrl, email, phone, hasPremium } = this.state;

        return (
            <div className={`merchant__form`}>
                <div onClick={this.onOverlayClick} className={`merchant__form--overlay`}></div>
                <div className={`merchant__form--main`}>
                    <form className={`merchant__form--main--details`}>
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
                            <input name="hasPremium" type="checkbox" checked={hasPremium} onChange={this.onChange} />
                        </div>
                    </form>

                    {(this.state.bids.length) ?
                        <div className={`merchant__form--main--bids`}>{
                            this.state.bids.map(
                                (bid, index) => 
                                    <MerchantBidForm
                                        key={bid.id || index}
                                        bid={bid}
                                        index={index}
                                        onSubmit={this.onBidSubmit}
                                        onRemove={this.removeBid}
                                    />
                            )
                        }</div> : null
                    }

                    <div className={`merchant__form--main--button-add-bid`}><button onClick={this.addBid}>Add bid</button></div>
                    <div className={`merchant__form--main--button-save`}><button onClick={this.submitForm}>Save</button></div>
                </div>
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