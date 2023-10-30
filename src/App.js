import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/Footer';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;