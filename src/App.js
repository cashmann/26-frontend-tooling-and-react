import React from 'react';
import logo from './logo.svg';
import './App.css';

import faker from 'faker';
import { say, DOGE} from 'cowsay';

class Header extends React.Component{
  render(){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: null,
      animal: null,
    };
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateState(content, animal){
    this.setState({content});
  }

  updateState2(animal){
    this.setState({animal});
  }
  handleGenerate(){
    this.updateState(say({ text: faker.fake('{{lorem.paragraph}}'), cow: this.state.animal}));
  }
  handleChange(event){
    let value = event.target.value;
    if(value === 'doge'){
      this.updateState2(DOGE);
    }else{
      this.updateState2(null);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <h2>Generate Cowsay Lorem</h2>
          <pre id='cow'>{this.state.content}</pre>
          <button onClick={this.handleGenerate}>Click Me!</button>
          <form>
            <select onChange={this.handleChange}>
              <option selected value='null' > Cow </option>
              <option value='doge'> Doge </option>
            </select>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
