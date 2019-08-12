import React, { Component } from 'react';
// import ToDoApp from '../components/ToDoApp';

class ToDoAppContainer extends Component {
    constructor(){
        super();
        this.state = {
            isStriked: false,
        }
    }

    strikeShow = () => {
        this.setState({isStriked: !this.state.isStriked});
    }

    render() {
        const strike = () => {
            if (this.state.isStriked) {
                return (
                    <>
                    <div className="section__row">
                    <div className="section__items section__items--click">{this.props.data}</div>
                    <div><button className="section__btn__complete" onClick={this.strikeShow}>Undo</button></div>
                    <div><button className="section__btn__delete" onClick={this.props.deleteItemFunc}>Delete</button></div>
                    </div>
                    </>
                );
            }else{
                return (
                    <>
                    <div className="section__row">
                    <div className="section__items">{this.props.data}</div>
                    <div><button className="section__btn__complete" onClick={this.strikeShow}>Complete</button></div>
                    <div><button className="section__btn__delete" onClick={this.props.deleteItemFunc}>Delete</button></div>
                    </div>
                    </>
                );
            }
        }
        return(
           <>
    
                {/* <div className="section__items">{this.props.data}}</div> */}
                {strike()}
           </>
        );
    }
    

}

export default ToDoAppContainer;