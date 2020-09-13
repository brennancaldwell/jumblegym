import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FullBodyTemplate from './FullBodyTemplate.jsx';
import Contribute from './Contribute.jsx';

const Wrapper = styled.div`
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
`;

const Title = styled.h1`
  font-size: 75px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'fullbody',
      chain: '',
      side: '',
      name: '',
      target: '',
      template: '',
      generated: false,
      contribute: false
    }
    this.generate = this.generate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contributeClick = this.contributeClick.bind(this);
    this.submitExercise = this.submitExercise.bind(this);
  }

  contributeClick() {
    const { contribute } = this.state;
    this.setState({
      contribute: !contribute
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
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

  submitExercise() {
    console.log('clicked');
    const { target, name, chain, side } = this.state;
    if (target === '') { error('Must specify a target muscle group!') }
    if (target === 'upper' || target === 'lower') {
      if (chain === '' || side === '') {
        error('Please fill out all form fields for this muscle group!');
      }
    } else if (target === 'biceps' || target === 'triceps' || target === 'shoulders') {
      if (side === '') {
        error('Please specify single or double-sided for this muscle group!');
      }
    } else if (target === 'abs') {
      if (chain === '') {
        error('Please specify anterior (front) or posterior (back) chain for abs!');
      }
    }
    axios.post('/exercise', { target, name, chain, side })
      .then((success) => this.setState({
        chain: '',
        side: '',
        name: '',
        target: '',
        contribute: false,
      }))
      .catch((err) => error('Could not post!'));
  }

  render () {
    console.log(this.state);
    const { generated, type, template, contribute } = this.state;
    let div;
    let contribution;

    if (generated && type === 'fullbody') {
      div = <FullBodyTemplate template={template} />
    } else {
      div = (<div></div>);
    }

    if (contribute) {
      contribution = <Contribute handleChange={this.handleChange} submit={this.submitExercise}/>;
    } else {
      contribution = (<button onClick={this.contributeClick}>Contribute</button>)
    }

    return (
      <Wrapper>
        <Title>FitRoulette</Title>
        {div}
        <button onClick={this.generate}>Generate</button>
        {contribution}
      </Wrapper>
    );
  }
};

export default App;