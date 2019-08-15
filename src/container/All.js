import React, {Component} from 'react';
import AllContainer from '../container/AllContainer';
import '../components/ToDoApp.css';
// import ToDoApp from '../components/ToDoApp'
// import ToDoAppContainer from '../container/ToDoAppContainer';

class All extends Component {
     state = {
            data: [],
            nameTask: '',
            searchTask: '',
    }

    componentWillMount = () => {
        fetch('http://localhost:3000/tasks/')
        .then(response => response.json())
        .then(result => {
        var arr = result.map(item => item)
        this.setState({...this.state, data: arr})
        })
        // .then(result => this.setState({...this.state, data: result}))
        .catch(err => console.log(err));
    }

    handleSearchChange = (event) => {
        this.setState({searchTask: event.target.value})
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
                            <p className="intro__paragraph">All Your Tasks</p>
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
                            return(
                                <AllContainer
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

export default All;