import React, { Component } from 'react';
// import ToDoApp from '../components/ToDoApp';

class ToDoAppContainer extends Component {
    constructor(){
        super();
        this.state = {
            // isStriked: false,
        }
    }

     componentWillMount = () => {
        fetch('http://localhost:3000/tasks/')
            .then(response => response.json())
            .then(result => {
                var arr = result.map(item => item.isStriked)
                this.setState({...this.state, data: arr})
            })
            // .then(result => this.setState({...this.state, data: result}))
            .catch(err => console.log(err));
    }

    // strikeShow = () => {
    //     this.setState({isStriked: !this.state.isStriked});
    // componentWillMount = () => {
    //     fetch('http://localhost:3000/tasks/', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({isStriked: this.props.isStriked})
    //         }).then(res=>res.json())
    //         .then(res => console.log(res));
    // }
    // }

    render() {
        const strike = () => {
            if (this.props.data.isStriked) {
                return (
                    <>
                    <div className="section__row">
                    <div className="section__items section__items--click">{this.props.data.id}</div>
                    <div><button className="section__btn__complete" onClick={() => this.props.strikeShowFunc(this.props.data.id)}>Undo</button></div>
                    <div><button className="section__btn__delete" onClick={this.props.deleteItemFunc}>Delete</button></div>
                    </div>
                    </>
                );
            }else{
                return (
                    <>
                    <div className="section__row">
                    <div className="section__items">{this.props.data.id}</div>
                    <div><button className="section__btn__complete" onClick={() => this.props.strikeShowFunc(this.props.data.id)}>Complete</button></div>
                    <div><button className="section__btn__delete" onClick={this.props.deleteItemFunc}>Delete</button></div>
                    </div>
                    </>
                );
            }
        }
        return(
           <>
                {strike()}
           </>
        );
    }
    

}

export default ToDoAppContainer;