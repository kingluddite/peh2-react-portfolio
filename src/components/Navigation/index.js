import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const {
    pages = [],
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
    currentPage,
    setCurrentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <h1>My React Portfolio</h1>
      <ul className="flex-row">
        <li className="mx-2">
          <button
            type="button"
            onClick={() => {
              setCurrentPage(pages[0]);
              setAboutSelected(true);
              setContactSelected(false);
              setPortfolioSelected(false);
              setResumeSelected(false);
            }}
          >
            About Me
          </button>
        </li>
        <li className="mx-2">
          <button
            type="button"
            onClick={() => {
              setCurrentPage(pages[1]);
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
              setCurrentPage(pages[2]);
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
              setCurrentPage(pages[3]);
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
  pages: PropTypes.array,
  setAboutSelected: PropTypes.func,
  setContactSelected: PropTypes.func,
  setPortfolioSelected: PropTypes.func,
  setResumeSelected: PropTypes.func,
  currentPage: PropTypes.object,
  setCurrentPage: PropTypes.func,
};

export default Navigation;
