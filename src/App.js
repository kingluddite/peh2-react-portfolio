import { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {!aboutSelected ? undefined : <About />}
        {!contactSelected ? undefined : <Contact />}
        {!portfolioSelected ? undefined : <Portfolio />}
        {!resumeSelected ? undefined : <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
