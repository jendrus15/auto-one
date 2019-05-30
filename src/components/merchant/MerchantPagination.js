import React from 'react';
import PropTypes from 'prop-types';

class MerchantPagination extends React.Component {
    state = {
        active: 1,
        pages: this.props.pages || 0
    }

    onNext = () => {
        this.setState({ active: ++this.state.active });
        this.props.onNext();
    }

    onPrev = () => {
        this.setState({ active: --this.state.active });
        this.props.onPrev();
    }

    onExact = page => {
        this.setState({ active: page });
        this.props.onExact(page);
    }

    render() {
        return (
            <div className={`merchant__pagination`}>
                {(this.state.active !== 1) ? <button onClick={this.onPrev}>Prev</button> : null}
                {
                    Array.from(Array(this.props.pages), (element, i) => i + 1).map(
                        page => <button className={`${this.state.active === page ? 'merchant__pagination--active' : ''}`} 
                                        key={page} 
                                        onClick={this.onExact.bind(this, page)}>
                                        {page}
                                </button>
                    )
                }                
                {(this.state.active < this.state.pages) ? <button onClick={this.onNext}>Next</button> : null}
            </div>
        )
    }
}

MerchantPagination.PropTypes = {
    pages: PropTypes.number,
    onExact: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
}

export default MerchantPagination;