import { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      name: 'about',
    },
    { name: 'portfolio' },
    { name: 'contact' },
    {
      name: 'resume',
    },
  ]);
  // about page will be default
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages[0]);

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
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
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
