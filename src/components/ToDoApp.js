import React, { Component } from 'react';

import './ToDoApp.css';
import ToDoAppContainer from '../container/ToDoAppContainer';
import Complete from '../container/Complete';

class ToDoApp extends Component {
    state = {
        data: [],
        nameTask: '',
        searchTask: '',
    }

    strikeShow = (index) => {
        console.log(this.state.data)
        // не приходит id
        let dataStrike = this.state.data;
        if (dataStrike[index].isStriked) dataStrike[index].isStriked = false;
        else dataStrike[index].isStriked = true;
        this.setState([dataStrike]);
        
        console.log(dataStrike[index])
        /* PUT in JSON server */
        fetch(`http://localhost:3000/tasks/${dataStrike[index].id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({nameTask: dataStrike[index].nameTask, isStriked: dataStrike[index].isStriked})
            }).then(res=>res.json())
            .then(res => console.log(res));
    }

    updataState = () => {
         fetch('http://localhost:3000/tasks/')
            .then(response => response.json())
            .then(result => {
                var arr = result.map(item => item)
                this.setState({...this.state, data: arr})
            })
            // .then(result => this.setState({...this.state, data: result}))
            .catch(err => console.log(err));
    }

    componentWillMount = () => {
        this.updataState();  
    }

    handleTaskChange = (event) => {
        this.setState({ nameTask: event.target.value })
    }

    handleSearchChange = (event) => {
        this.setState({searchTask: event.target.value})
    }

    handleClick = () => {
      
        // let someText = this.state.nameTask;
        
        // console.log(arr)
        let arr = this.state.data;
        arr.push({nameTask: this.state.nameTask, isStriked: false})
        this.setState({...this.state, data: arr});

        fetch('http://localhost:3000/tasks/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nameTask: this.state.nameTask, isStriked: false})
            }).then(res=>res.json())
            .then(res => console.log(res))
            .then(res => this.updataState())

        //  console.log(this.state.data.length)
        // не сработала идея
        
    }

    handleCleanClick = () => {
        this.setState({nameTask: ""})
    }

    deleteItem = (index) => {
        let dataItem =this.state.data;
        fetch(`http://localhost:3000/tasks/${dataItem[index].id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'DELETE',
            body: JSON.stringify({data: dataItem})
            }).then(res=>res.json())
            .then(res => console.log(res));
        dataItem.splice(index, 1); 

        this.setState([dataItem]);
    }
    
    render(){
        // const filteredSearch = this.state.data.filter(task => {
        //         return task.toLowerCase().includes(this.state.searchTask.toLowerCase());
        //     });
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
                        {this.state.data.map((item, index) => {
                            if (item.nameTask === this.state.searchTask) {
                                return(
                                    
                                    <ToDoAppContainer
                                        strikeShowFunc= {() => this.strikeShow(index)}
                                        deleteItemFunc={() => this.deleteItem(index)}
                                        key={index}
                                        data={item}      
                                    />
                                );
                            } else if (this.state.searchTask === '') {
                                return(
                                    
                                    <ToDoAppContainer
                                        strikeShowFunc= {() => this.strikeShow(index)}
                                        deleteItemFunc={() => this.deleteItem(index)}
                                        key={index}
                                        data={item}      
                                    />
                                );
                            }
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