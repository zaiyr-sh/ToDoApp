import React, {Component} from 'react';
import ToDoAppContainer from '../container/ToDoAppContainer';

class Incomplete extends Component {
     constructor(){
        super();
        this.state = {
            data: [],
            nameTask: '',
            searchTask: '',
        }
    }

   
    handleSearchChange = (event) => {
        this.setState({searchTask: event.target.value})
    }


    deleteItem = (index) => {
        let dataItem =this.state.data;
        dataItem.splice(index, 1);
        
        this.setState({data: dataItem});
    }
    
    render(){
        const filteredSearch = this.state.data.filter (
            (task) => {
                return task.toLowerCase().includes(this.state.searchTask.toLowerCase());
            }
        );

        return(
            <>
            <header>
                <div className="intro">
                    <div className="container">
                    
                        <div className="intro__inner">
                            <h1 className="intro__title">To-Do App!</h1>
                        </div>
                            
                        <div className="intro__search">
                            <p className="intro__paragraph">All Your Incomplete Tasks</p>
                            
                            
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

                    <div className="section__tasks">   
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
                    <div className="footer__icon"><images src="../container/images/cosmic_js.png"></images></div>
                    <div className="footer__title">Proudly powered by Cosmic JS</div>
                </div>
            </footer>

            </>
  
        );
    }

}

export default Incomplete;