import PropTypes from 'prop-types';
import Navigation from '../Navigation';

function Header(props) {
  const { setAboutSelected, setContactSelected, setPortfolioSelected, setResumeSelected } = props;

  return (
    <header>
      <Navigation
        setAboutSelected={setAboutSelected}
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
        setResumeSelected={setResumeSelected}
      />
    </header>
  );
}

Header.propTypes = {
  setAboutSelected: PropTypes.func,
  setContactSelected: PropTypes.func,
  setPortfolioSelected: PropTypes.func,
  setResumeSelected: PropTypes.func,
};

export default Header;
