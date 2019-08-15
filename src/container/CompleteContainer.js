import React, { Component } from 'react';

class CompleteContainer extends Component {
    render() {
        return (
            <div>&rArr; {this.props.data.nameTask}</div>
        );
    }
}

export default CompleteContainer;