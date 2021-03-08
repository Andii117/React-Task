import React from 'react';

class formulario extends React.Component{

    constructor(){
        super();
        this.state = {
            title: "",
            responsable:"",
            description:"",
            preiority:"low"
        };
        //Si sehace como función flecha se evita esto
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        //console.log(e.target.value, e.target.name);
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log("sending data....");
        console.log(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Tarea</span>
                        <input 
                            type="text" 
                            name= "title"
                            placeholder="Ingrese su tarea"
                            onChange={this.handleInput}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Responsable</span>
                        <input 
                            type="text" 
                            name= "responsable"
                            placeholder="Ingrese el responsable"
                            onChange={this.handleInput}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Descripción</span>
                        <input 
                            type="text" 
                            name= "description"
                            placeholder="Ingrese su descripción"
                            onChange={this.handleInput}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <select 
                        name="preiority"
                        className="form-select" 
                        onChange={this.handleInput}
                        aria-label="Default select example">
                        <option ></option>
                        <option >low</option>
                        <option >medium</option>
                        <option >high</option>
                    </select>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default formulario;