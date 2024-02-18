import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar />
      <Hero />
    </section>
    <section id='Service'>Services</section>
    <section id='Portfolio'>Portfolio</section>
    <section id='Contact'>Contact</section>
    <section id='About'>About</section>
  </div>;
};

export default App;