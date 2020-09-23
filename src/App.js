import React, { useContext } from 'react';
import Counter from './Counter';
import './App.css';
import {Provider} from "react-redux";
import store from './state-management/store';

export class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
 
  componentDidMount() {
    this.timer = setInterval(
      () => this.sec() ,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  sec() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1 className="mamad">It is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOn : true};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    return (
      <div className="mamadDiv"><button onClick={this.clickHandler} className="mamadOn">
      {this.state.isOn ? 'ON' : 'OFF'}
    </button></div>      
    )
  }
}

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({value: event.target.value});
  }

  submitHandler(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mamadForm">
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.value} onChange={this.changeHandler}/>      
        </form>
      </div>
    )
  }
}

//###############################################

const themes = {
  light: {
    background: '#eeeeee',
  },
  dark: {
    background: '#559955',
  },
};

const ThemeContext = React.createContext(
  themes.dark // default value
);

function ThemedButton(props) {
  const theme = useContext(ThemeContext);
  return (
    <div style={{textAlign: "center"}}>
      <button
    {...props}
    style={{backgroundColor: theme.background}}
    />
  </div>   
  );
}

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export class ContextTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <div className = "mamadInBeach">
          <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
        </div>
      </div>      
    );
  }
}

//###############################################

export class CounterApp extends React.Component {
  render() {
    return (
      <div className = "mamadov">
        <Provider store = {store}>
           <Counter />
        </Provider></div>
      
    );   
  }
}

