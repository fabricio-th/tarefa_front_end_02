import React, {Component} from 'react';



class UsuarioSaida extends Component{
  render(props){
    return (
      <div>
        <p>{this.props.nome}</p>
        <p>Texto qualquer...</p>
      </div>
    );    
  }
}

export default UsuarioSaida