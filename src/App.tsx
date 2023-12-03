import './App.css';
import { Particle } from './components/patticle/Particle';

import { Header } from './layout/header/Header';
import { About } from './layout/section/about/About';
import { Assist } from './layout/section/assist/Assist';
import { Footer } from './layout/section/footer/Footer';
import { Main } from './layout/section/main/Main';
import { Service } from './layout/section/servise/Service';
import { Works } from './layout/section/works/Works';


function App() {
  return (
    <div className='App'>
      <Particle />
      <Header />
      <Main />
      <About />
      <Service />
      <Works />
      <Assist />
      <Footer />
    </div>
  );
}

export default App;

