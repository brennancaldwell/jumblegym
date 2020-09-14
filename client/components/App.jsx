import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';
import FullBodyTemplate from './FullBodyTemplate.jsx';
import TemplateSelect from './TemplateSelect.jsx';
import Contribute from './Contribute.jsx';
import SaveModal from './SaveModal.jsx';
import SavedTemplatesModal from './SavedTemplates.jsx';
import './style.css';

Modal.setAppElement('#app');

const Wrapper = styled.div`
  text-align: center;
  font-family: 'Share', cursive;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: grid;
  grid-gap: 0;
  grid-template-rows: 1fr
  grid-template-columns: 1fr 1fr;
  font-size: 20px;
  opacity: 0.9;
`;

const ShareBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: #ffe135;
  cursor: pointer;
  grid-area: 1 / 1 / span 1 / span 1;
  transition: 125ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
    border-bottom: .5px solid #ffe135;
  }
`;

const SavedBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: #ffe135;
  border-left: .5px solid #000;
  cursor: pointer;
  grid-area: 1 / 2 / span 1 / span 1;
  transition: 125ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
    border-bottom: .5px solid #ffe135;
  }
`;

const Title = styled.h1`
  margin: 85px 0 10px 0;
  font-size: 90px;
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
  border-radius: 3px;
  cursor: pointer;
  color: #000;
  background-color: #ffe135;
  border: 1px solid #000;
  transition: 125ms ease-in-out;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 1px solid #ffe135;
  }
`;

const ShareButton = styled.button`
  padding: 15px 30px 15px 30px;
  margin: 10px;
  font-family: 'Share', cursive;
  font-size: 20px;
  width: 150px;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  background-color: #000;
  border: 1px solid #ffe135;
  transition: 125ms ease-in-out;

  &:hover {
    color: #000;
    background-color: #ffe135;
    border: 1px solid #000;
  }
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
      savedTemplateName: '',
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
    this.fetchSaved = this.fetchSaved.bind(this);
    this.selectSaved = this.selectSaved.bind(this);
  }

  contributeToggle() {
    const { contribute } = this.state;
    this.setState({
      contribute: !contribute,
      chain: '',
      side: '',
      name: '',
      target: '',
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
        this.fetchSaved();
      })
      .catch((err) => console.log(err));
  }

  selectSaved(e) {
    const { savedTemplates } = this.state;
    const id = e.target.id;
    const selected = savedTemplates.filter(temp => temp._id === id);
    const selectedTemp = selected[0].template[0];
    const name = selected[0].name === '' ? `Workout From ${selected[0].date.slice(5,7)}/${selected[0].date.slice(8,10)}/${selected[0].date.slice(0,4)}` : selected[0].name;
    this.setState({
      template: selectedTemp,
      generated: true,
      savedTemplatesModal: false,
      savedTemplateName: name,
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
          template: template.data,
          savedTemplateName: '',
        });
      });
  }

  fetchSaved() {
    axios.get('/templates')
      .then((templates) => {
        this.setState({
          savedTemplates: templates.data
        })
      });
  }

  componentDidMount() {
    this.fetchSaved();
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
    const { generated, type, template, contribute, savedTemplates, savedTemplateName } = this.state;
    let div;

    if (generated && type === 'fullbody') {
      div = <FullBodyTemplate savedName={savedTemplateName} template={template} save={this.saveToggle}/>
    } else {
      div = (<div></div>);
    }

    return (
      <Wrapper>
        <NavBar>
          <ShareBar onClick={this.contributeToggle}>Contribute
          </ShareBar>
          <SavedBar onClick={this.savedTemplatesModalToggle}>Saved Templates</SavedBar>
        </NavBar>
        <Title>FitRoulette</Title>
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
        <Modal
          isOpen={this.state.savedTemplatesModal}
          onRequestclose={this.savedTemplatesModalToggle}
          contentlabel="Saved templates"
          className="shareExercise"
          overlayClassName="modalOverlay"
          closeTimeoutMS={600}
          >
            <SavedTemplatesModal savedTemplates={savedTemplates} select={this.selectSaved}/>
            <CloseButton onClick={this.savedTemplatesModalToggle}>x</CloseButton>
          </Modal>
        <TemplateSelect />
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


//<ShareButton onClick={this.contributeToggle}>Contribute</ShareButton>