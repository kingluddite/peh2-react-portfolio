import Navigation from '../Navigation';

function Header(props) {
  const { contactSelected, setContactSelected } = props;

  return (
    <header>
      <Navigation contactSelected={contactSelected} setContactSelected={setContactSelected} />
    </header>
  );
}

export default Header;
