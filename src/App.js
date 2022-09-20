import './App.css';
import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ContactSidebar from './components/ContactSidebar';
import Scrollbar from './components/Scrollbar';
import AnimateBackground from './components/AnimateBackground';
import ReturnToTop from './components/ReturnToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AnimateBackground />
      <Scrollbar />
      <ContactSidebar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <ReturnToTop />
      <Footer />
    </div>
  );
}

export default App;
