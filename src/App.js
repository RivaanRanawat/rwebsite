import React,{Component} from 'react';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Contact from './Contact.js';

class App extends Component{
	render() {
		return (
    <div className="App">
    <Header/>
    <About/>
    <Contact/>
    </div>
  );
	}
}

export default App;
