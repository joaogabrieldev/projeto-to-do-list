// Componente Classe

import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    };
  }

  render() {
    return <h1>Olá, mundo, {this.state.message}</h1>;
  }
}

export default Test;
