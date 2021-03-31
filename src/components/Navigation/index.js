import PropTypes from 'prop-types';

function Navigation(props) {
  const { setAboutSelected, setContactSelected, setPortfolioSelected, setResumeSelected } = props;

  return (
    <nav>
      <h1>My React Portfolio</h1>
      <ul className="flex-row">
        <li className="mx-2">
          <button
            type="button"
            onClick={() => {
              setAboutSelected(true);
              setContactSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(false);
            }}
          >
            About
          </button>
        </li>
        <li className="mx-2">
          <button
            type="button"
            onClick={() => {
              setContactSelected(false);
              setAboutSelected(false);
              setPortfolioSelected(true);
              setResumeSelected(false);
            }}
          >
            Portfolio
          </button>
        </li>
        <li className="mx-2">
          <button
            type="button"
            onClick={() => {
              setContactSelected(true);
              setAboutSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(false);
            }}
          >
            Contact
          </button>
        </li>
        <li className="mx-2">
          <button
            type="button"
            onClick={() => {
              setContactSelected(false);
              setAboutSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(true);
            }}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  setAboutSelected: PropTypes.func,
  setContactSelected: PropTypes.func,
  setPortfolioSelected: PropTypes.func,
  setResumeSelected: PropTypes.func,
};

export default Navigation;
