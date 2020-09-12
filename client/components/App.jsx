import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FullBodyTemplate from './FullBodyTemplate.jsx';

const Wrapper = styled.div`
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'fullbody',
      chain: '',
      side: '',
      name: '',
      template: '',
      generated: false,
    }
    this.generate = this.generate.bind(this);
  }

  generate() {
    const { type } = this.state;
    axios.get(`/${type}`)
      .then((template) => {
        this.setState({
          generated: true,
          template: template.data
        });
      });
  }

  render () {

    const { generated, type, template } = this.state;
    let div;

    if (generated && type === 'fullbody') {
      div = <FullBodyTemplate template={template} />
    } else {
      div = (<div></div>);
    }

    return (
      <Wrapper>
        <h1>FitRoulette</h1>
        {div}
        <button onClick={this.generate}>Generate</button>
      </Wrapper>
    );
  }
};

export default App;