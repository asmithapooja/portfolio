import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header2';
import Body2 from './components/Body2';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
        <Navbar />
      <Header />
      <Body2 />
      <Projects />
      <Contact />
    </>

  );
}

export default App;
