import { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header contactSelected={contactSelected} setContactSelected={setContactSelected} />
      <main>
        {!contactSelected ? (
          <>
            <Portfolio />
            <About />
          </>
        ) : (
          <Contact />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
