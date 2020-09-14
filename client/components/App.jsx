import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';
import FullBodyTemplate from './FullBodyTemplate.jsx';
import Contribute from './Contribute.jsx';
import SaveModal from './SaveModal.jsx';
import './style.css';

Modal.setAppElement('#app');

const Wrapper = styled.div`
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
`;

const Title = styled.h1`
  font-size: 75px;
  color: #ffe135;
  text-shadow: 2px 2px 5px #000;
  font-family: 'Trade Winds', cursive;
`;

const SpecButton = styled.button`
  padding: 15px 30px 15px 30px;
  margin: 10px;
  font-family: 'Share', cursive;
  font-size: 20px;
  width: 150px;
  color: #fff;
  background-color: #000;
  border: 1px solid #ffe135;
  border-radius: 3px;
  cursor: pointer;
`;

const ShareButton = styled.button`
  padding: 15px 30px 15px 30px;
  margin: 10px;
  font-family: 'Share', cursive;
  font-size: 20px;
  width: 150px;
  color: #000;
  background-color: #ffe135;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
`;

const CloseButton = styled.div`
  color: #ffe135;
  font-family: 'Trade Winds', cursive;
  font-size: 18px;
  position: absolute;
  top: 4%;
  right: 4%;

  &:hover {
    cursor: pointer;
  }
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
      templateName: '',
      savedTemplates: [],
      generated: false,
      contribute: false,
      savingTemp: false,
      savedTemplatesModal: false,
    }
    this.generate = this.generate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitExercise = this.submitExercise.bind(this);
    this.contributeToggle = this.contributeToggle.bind(this);
    this.saveToggle = this.saveToggle.bind(this);
    this.savedTemplatesModalToggle = this.savedTemplatesModalToggle.bind(this);
    this.saveTemplate = this.saveTemplate.bind(this);
  }

  contributeToggle() {
    const { contribute } = this.state;
    this.setState({
      contribute: !contribute,
    })
  }

  saveToggle() {
    const { savingTemp } = this.state;
    this.setState({
      savingTemp: !savingTemp,
    });
  }

  savedTemplatesModalToggle() {
    const { savedTemplatesModal } = this.state;
    this.setState({
      savedTemplatesModal: !savedTemplatesModal,
    });
  }

  saveTemplate() {
    const { template, templateName } = this.state;
    const date = new Date();
    const options = {
      name: templateName,
      type: template.type,
      date: date,
      template: template,
    }
    axios.post('/savetemplate', options)
      .then((success) =>{
        this.saveToggle();
        console.log('Successful post');
      })
      .catch((err) => console.log(err));
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
    console.log(this.state.templateName);

    if (generated && type === 'fullbody') {
      div = <FullBodyTemplate template={template} save={this.saveToggle}/>
    } else {
      div = (<div></div>);
    }

    return (
      <Wrapper>
        <Title>FitRoulette</Title>
        <ShareButton onClick={this.contributeToggle}>Contribute</ShareButton>
        <br />
        <Modal
          isOpen={this.state.contribute}
          onRequestClose={this.contributeToggle}
          contentLabel="Share A New Exercise"
          className="shareExercise"
          overlayClassName="modalOverlay"
          closeTimeoutMS={600}
          >
            <Contribute handleChange={this.handleChange} submit={this.submitExercise}/>
            <CloseButton onClick={this.contributeToggle}>x</CloseButton>
          </Modal>
        <SpecButton onClick={this.generate}>Generate</SpecButton>
        {div}
        <Modal
         isOpen={this.state.savingTemp}
         onRequestClose={this.saveToggle}
         contentLabel="Save Template"
         className="saveTemplate"
         overlayClassName="modalOverlay"
         closeTimeoutMS={600}
         >
           <SaveModal handleChange={this.handleChange} saveTemp={this.saveTemplate}/>
           <CloseButton onClick={this.saveToggle}>x</CloseButton>
         </Modal>
      </Wrapper>
    );
  }
};

export default App;