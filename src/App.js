import logo from './logo.svg';
import './App.css';

import About from './components/about/About';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  console.log('This is a work in progress :)')



  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Landing />
      </header>
    </div>
  );
}

export default App;
