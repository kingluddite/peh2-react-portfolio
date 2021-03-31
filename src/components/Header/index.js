import PropTypes from 'prop-types';
import Navigation from '../Navigation';

function Header(props) {
  const {
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
    pages,
    currentPage,
    setCurrentPage,
  } = props;

  return (
    <header>
      <Navigation
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
        setResumeSelected={setResumeSelected}
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </header>
  );
}

Header.propTypes = {
  setAboutSelected: PropTypes.func,
  setContactSelected: PropTypes.func,
  setPortfolioSelected: PropTypes.func,
  setResumeSelected: PropTypes.func,
  pages: PropTypes.array,
  currentPage: PropTypes.object,
  setCurrentPage: PropTypes.func,
};

export default Header;
