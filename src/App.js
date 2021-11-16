
import './App.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Header />
          <Footer />
          <Section />

        </a>
      </header>
    </div>
  );
}

export default App;
