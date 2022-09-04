import './App.css';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import ContactSidebar from './components/ContactSidebar';
import Scrollbar from './components/Scrollbar';
import AnimateBackground from './components/AnimateBackground';

function App() {
  return (
    <div className="App">

      <Scrollbar />
      <ContactSidebar />
      
      
      <Landing />
      <AnimateBackground />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
