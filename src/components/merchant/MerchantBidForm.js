import React from 'react';
import uuid from 'uuid';

class MerchantBidForm extends React.Component {
    constructor(props) {
        super(props);

        this.skeleton = {
            id: '',
            carTitle: '',
            amount: 0,
            created: '',
        }

        this.state = {...this.skeleton, ...props.bid, ...{ edit: props.bid.added || false }};
    }

    componentDidMount(){
        if(this.state.added) this.titleInput.focus();
        this.setState({ added: false }); 
    }

    toggleEdit = () => this.setState({ edit: !this.state.edit });

    onSubmit = event => {
        if(!this.state.id) this.setState({id: uuid.v4()});

        let emptyField = false;
        
        for(const bidElem in this.skeleton) {
            if(emptyField === true) continue;
            
            // eslint-disable-next-line
            if(this.state[bidElem] == false) emptyField = true;
        }

        if(emptyField) {
            alert('Please fill all fields');
            return false;
        }

        this.props.onSubmit(this.state, this.props.index);

        this.toggleEdit();
    }

    onChange = event => this.setState({ [event.target.name]: event.target.value })

    onRemove = () => this.props.onRemove(this.props.index);

    render() {
        const { carTitle, amount, created } = this.state;

        return (
            <div className={`merchant__form--main--bid ${(this.state.edit) ? 'bid-edit' : ''}`}>
                <input disabled={ !this.state.edit } name="carTitle" type="text" value={carTitle} onChange={this.onChange} ref={ input => { this.titleInput = input } } />
                <input disabled={ !this.state.edit } name="amount" type="number" value={amount} onChange={this.onChange} />
                <input disabled={ !this.state.edit } name="created" type="date" value={created} onChange={this.onChange} />

                { (!this.state.edit) ?
                    <button onClick={this.toggleEdit}>Edit</button> :
                    <button onClick={this.onSubmit}>Save</button>
                }

                <button onClick={this.onRemove}>X</button>
            </div>
        )
    }
}

export default MerchantBidForm;