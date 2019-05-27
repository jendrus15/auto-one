import React from 'react';

class MerchantPagination extends React.Component {
    state = {
        active: 1,
        pages: this.props.pages || 1
    }

    onNext = () => {
        this.setState({
            active: this.state.active++
        });
        if(this.props.onNext) this.props.onNext();
    }

    onPrev = () => {
        this.setState({
            active: this.state.active--
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
            <div>
                <div onClick={this.onPrev}>Prev</div>
                {
                    Array.from(Array(this.props.pages), (e,i)=>i+1).map(
                        page => <div key={page} onClick={this.onExact.bind(this, page)}>{page}</div>
                    )
                }
                <div onClick={this.onNext}>Next</div>
            </div>
        )
    }
}

export default MerchantPagination;