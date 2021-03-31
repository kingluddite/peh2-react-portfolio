import PropTypes from 'prop-types';
import Navigation from '../Navigation';

function Header(props) {
  const { contactSelected, setContactSelected } = props;

  return (
    <header>
      <Navigation contactSelected={contactSelected} setContactSelected={setContactSelected} />
    </header>
  );
}

Header.propTypes = {
  contactSelected: PropTypes.bool,
  setContactSelected: PropTypes.func,
};

export default Header;
