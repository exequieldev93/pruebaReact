import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h3>Este es un Formulairo</h3>
                </div>
                
                <div className="col-md-8">
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="col-md-8 ">
                    <input className="form-control" typeof="text" id="nombre"></input>
                </div>  
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
