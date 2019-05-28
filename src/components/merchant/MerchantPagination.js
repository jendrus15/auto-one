import React from 'react';

class MerchantPagination extends React.Component {
    state = {
        active: 1,
        pages: this.props.pages || 1
    }

    onNext = () => {
        this.setState({
            active: ++this.state.active
        });
        if(this.props.onNext) this.props.onNext();
    }

    onPrev = () => {
        this.setState({
            active: --this.state.active
        });
        if(this.props.onPrev) this.props.onPrev();
    }

    onExact = page => {
        this.setState({
            active: page
        });
        if(this.props.onExact) this.props.onExact(page);
    }

    render() {
        return (
            <div className={`merchant__pagination`}>
                {(this.state.active !== 1) ? <button onClick={this.onPrev}>Prev</button> : null}
                {
                    Array.from(Array(this.props.pages), (e,i)=>i+1).map(
                        page => <button className={`${this.state.active === page ? 'merchant__pagination--active' : ''}`} key={page} onClick={this.onExact.bind(this, page)}>{page}</button>
                    )
                }                
                {(this.state.active < this.state.pages) ? <button onClick={this.onNext}>Next</button> : null}
            </div>
        )
    }
}

export default MerchantPagination;