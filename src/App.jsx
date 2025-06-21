import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-gray-900">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
