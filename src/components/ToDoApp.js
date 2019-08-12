import React, { Component } from 'react';

import './ToDoApp.css';
import ToDoAppContainer from '../container/ToDoAppContainer';
// import App from '../App'
// import All from '../container/All'

class ToDoApp extends Component {
    state = {
        data: [],
        nameTask: '',
        searchTask: '',
    }

    componentWillMount = () => {
        fetch('http://localhost:3000/tasks/')
            .then(response => response.json())
            .then(result => {
                var arr = result.map(item => item.nameTask)
                this.setState({...this.state, data: arr})
            })
            // .then(result => this.setState({...this.state, data: result}))
            .catch(err => console.log(err));
    }

    handleTaskChange = (event) => {
        this.setState({ nameTask: event.target.value })
    }

    handleSearchChange = (event) => {
        this.setState({searchTask: event.target.value})
    }

    handleClick = () => {
        let arr = this.state.data;
        // let someText = this.state.nameTask;
        arr.push(this.state.nameTask)
        this.setState({...this.state, data: arr});
        // console.log(arr)

        fetch('http://localhost:3000/tasks/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nameTask: this.state.nameTask})
            }).then(res=>res.json())
            .then(res => console.log(res));
    }

    handleCleanClick = () => {
        this.setState({nameTask: ""})
    }

    deleteItem = (index) => {
        let dataItem =this.state.data;
        dataItem.splice(index, 1);      
        this.setState({data: dataItem});
    }
    
    render(){
        const filteredSearch = this.state.data.filter(task => {
                return task.toLowerCase().includes(this.state.searchTask.toLowerCase());
            });
        return(
            <>
            <header>
                <div className="intro">
                    <div className="container">
                    
                        <div className="intro__inner">
                            <h1 className="intro__title">To-Do App!</h1>
                        </div>
                            
                        <div className="intro__search">
                            <p className="intro__paragraph">Add New To-Do</p>
                            <form action="#" method="post">
                                <label htmlFor="task"></label><input 
                                className="intro__input" 
                                placeholder="Enter new task"
                                type="text" 
                                value={this.state.nameTask}
                                onChange={this.handleTaskChange}>
                                </input>
                            </form>
                            <div className="intro__btn"><input 
                                className="intro__btn__interface"
                                type="button"
                                value="Add"
                                onClick={this.handleClick}
                            ></input></div>
                            <div className="intro__btn intro__btn--second"><input 
                                className="intro__btn__interface"
                                type="button"
                                value="Clean"
                                onClick={this.handleCleanClick}
                            ></input></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section">
                <div className="container">

                    <div className="section__header">
                        <div className="section__title">Let's get some work done!</div>    
                        
                        <div className="section__content">
					        <div className="form-wrapper">
                                <div className="linker"> 
                                    <span className="ring"></span>
                                    <span className="ring"></span>
                                    <span className="ring"></span>
                                    <span className="ring"></span>
                                    <span className="ring"></span>
                                </div>

                                <form className="login-form" action="#" method="post">					
                                    <input type="text" name="country"  
                                    value={this.state.searchTask} 
                                    onChange={this.handleSearchChange}
                                    />
                                </form>
					        </div>
				        </div>

                    </div>

                    <div className="section__column">
                        {filteredSearch.map((item, index) => {
                            return(
                                <ToDoAppContainer 
                                    // completeItemFunc={() => this.completeItem(index)} 
                                    deleteItemFunc={() => this.deleteItem(index)}
                                    key={index}
                                    data={item}         
                                />
                            );
                        })}
                    </div> 
    
                </div>

            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer__icon"><img alt="img" src="../container/images/cosmic_js.png"></img></div>
                    <div className="footer__title">Proudly powered by Cosmic JS</div>
                </div>
            </footer>

            </>
  
        );
    }

    

}

export default ToDoApp;