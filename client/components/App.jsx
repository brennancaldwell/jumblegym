import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'fullbody',
      chain: '',
      side: '',
      name: '',
      template: '',
    }
    this.generate = this.generate.bind(this);
  }

  generate() {
    const { type } = this.state;
    axios.get(`/${type}`)
      .then((template) => {
        this.setState({
          template: template.data
        });
      });
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <h1>FitRoulette</h1>
        <button onClick={this.generate}>Generate</button>
      </div>
    );
  }
};

export default App;