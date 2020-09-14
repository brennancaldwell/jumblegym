import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';
import FullBodyTemplate from './FullBodyTemplate.jsx';
import Contribute from './Contribute.jsx';

Modal.setAppElement('#app');

const Wrapper = styled.div`
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
`;

const Title = styled.h1`
  font-size: 75px;
`;

const SpecButton = styled.button`
  padding: 5px;
  font-family: 'Kumbh Sans', sans-serif;
  width: 100px;
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
      contribute: false,
    }
    this.generate = this.generate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitExercise = this.submitExercise.bind(this);
    this.contributeToggle = this.contributeToggle.bind(this);
  }

  contributeToggle() {
    const { contribute } = this.state;
    this.setState({
      contribute: !contribute,
    })
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
    const { generated, type, template, contribute } = this.state;
    let div;

    if (generated && type === 'fullbody') {
      div = <FullBodyTemplate template={template} />
    } else {
      div = (<div></div>);
    }

    return (
      <Wrapper>
        <Title>FitRoulette</Title>
        <SpecButton onClick={this.contributeToggle}>Share An Exercise</SpecButton>
        <br />
        <Modal
          isOpen={this.state.contribute}
          onRequestClose={this.contributeToggle}
          contentLabel="Contribute New Exercise"
          >
            <Contribute handleChange={this.handleChange} submit={this.submitExercise}/>
            <SpecButton onClick={this.contributeToggle}>Close Modal</SpecButton>
          </Modal>
        <SpecButton onClick={this.generate}>Generate</SpecButton>
        {div}
      </Wrapper>
    );
  }
};

export default App;