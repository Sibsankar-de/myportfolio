
import './App.css';
import './css/main_style.css'
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
