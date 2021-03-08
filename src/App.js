import React from 'react';

import logo from './logo.svg';
import './App.css';

import Formulario from './components/formulario';
import {todos} from './todo.json';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos //es igual todos: todos
    }
    //Si no lo hacemos como función flecha toca hacer esto 
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  //función que recibe una tarea y la almacena por medio del estado
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos,todo]
    });
  }

  handleremoveTodo(index){
    if (window.confirm('Are you sureyou want todelete it?')){
      this.setState({
        //Recorre la información y si el indice es el mismo del objeto no lo devuelve(Elimina)
        todos: this.state.todos.filter((e,i)=>{
          return i !== index
        })
      });
    }
  }

  render(){

    const todos = this.state.todos.map((todo, i)=>{
      return (
        <dvi className="col-md-4" key={i}>
          <div className="card mt-5">
            <div className="card header">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger mx-5">
                {todo.preiority}
              </span>
            </div>
            <div className="card body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button 
                type="button" 
                class="btn btn-danger"
                onClick={this.handleremoveTodo.bind(this,i)}
              >
                Drop task</button>
            </div>
        </div>
        </dvi>
      );
    });
    
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a href="#" className="text-white">
              Task <span className="badge bg-warning text-dark mx-5">{this.state.todos.length}</span>
            </a>
          </nav>
          <div className="container">
            <dvi className="col-md-4">
              <div className="card mt-5">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="card header">
                  <h1 className="h1">Nueva tarea</h1>
                </div>
              <div className="card body">
                <Formulario onAddTodo={this.handleAddTodo}/>
              </div>
            </div>
        </dvi>          
        <div className="row -mt -4">
            {todos}
        </div>
        </div>
          
      </div>
    );
  }
}

export default App;
