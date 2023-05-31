import logo from './logo.svg';
import './App.css';
import './style.css';
import './stylize.css';
import './styled.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import NavigationBar from './components/NavigationBar';
import MainBody from './components/MainBody';

import Info from './components/Info';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import CardFour from './components/CardFour';
import Buttons from './components/Buttons';
import About from './components/About';
import Interests from './components/Interests';
import SocialFooter from './components/SocialFooter';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload it.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    <div className="mainBody">
      <div className='card--container'>
          <Info />
          <Buttons />
          <About />
          <Interests />
          <SocialFooter />
      </div>

      <div className='card--container'>
          <CardTwo />
          <Buttons />
          <About />
          <Interests />
          <SocialFooter />
      </div>

      <div className='card--container'>
          <CardThree />
          <Buttons />
          <About />
          <Interests />
          <SocialFooter />
      </div>

      <div className='card--container'>
          <CardFour />
          <Buttons />
          <About />
          <Interests />
          <SocialFooter />
      </div>
    </div>
  );
}

export default App;
