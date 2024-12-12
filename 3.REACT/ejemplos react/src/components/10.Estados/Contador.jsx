import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  decrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador - 1,
    }));
  };

  componentDidUpdate() {
    console.log("componente actualizado", this.state.contador);
  }

  render() {
    return (
      <>
        <button onClick={this.incrementar}>incrementar</button>
        <button onClick={this.decrementar}>decrementar</button>
        <p>{this.state.contador}</p>
      </>
    );
  }
}

export default Contador;
