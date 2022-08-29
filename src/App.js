import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
