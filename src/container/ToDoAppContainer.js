import React, { Component } from 'react';
import ToDoApp from '../components/ToDoApp';
import Complete from '../container/ToDoAppContainer';

class ToDoAppContainer extends Component {


    render() {
        const strike = () => {
            if (this.props.data.isStriked) {
                console.log(this.props.data.isStriked)
                return (
                    <>
                    <div className="section__row">
                    <div className="section__items section__items--click">{this.props.data.nameTask}</div>
                    <div><button className="section__btn__complete" onClick={this.props.strikeShowFunc}>Undo</button></div>
                    <div><button className="section__btn__delete" onClick={this.props.deleteItemFunc}>Delete</button></div>
                    </div>
                    </>
                );
            }else{
                return (
                    <>
                    <div className="section__row">
                    <div className="section__items">{this.props.data.nameTask}</div>
                    {console.log(this.props.data.nameTask)}
                    <div><button className="section__btn__complete" onClick={this.props.strikeShowFunc}>Complete</button></div>
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