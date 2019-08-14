import React, { Component } from 'react';
import ToDoApp from '../components/ToDoApp';
import Complete from '../container/ToDoAppContainer';

class ToDoAppContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isStriked: false,
        }
    }

    strikeShow = () => {
        // let changeStriked = this.props.data;
        // console.log(changeStriked)
        this.setState({isStriked: !this.state.isStriked});

        // let data = { ...this.props.nameTask}
        // console.log(data)
        fetch('http://localhost:3000/tasks/1', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({nameTask: this.props.data, isStriked: this.state.isStriked })
            }).then(res=>res.json())
            .then(res => console.log(res));
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