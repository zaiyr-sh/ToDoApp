import React, { Component } from 'react';

class IncompleteContainer extends Component {
    render() {
        return (
            <div>&rArr; {this.props.data.nameTask}</div>
        );
    }
}

export default IncompleteContainer;