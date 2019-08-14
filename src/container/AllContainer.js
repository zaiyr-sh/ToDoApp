import React, { Component } from 'react';

class AllContainer extends Component {
    render() {
        return (
            <div>&rArr; {this.props.data.nameTask}</div>
        );
    }
}

export default AllContainer;