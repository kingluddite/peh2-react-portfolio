import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project';
import photo from '../../assets/img/small/react-logo.png';

function Portfolio() {
  const currentCategory = {
    name: 'react',
    description: 'front end react application',
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div className="flex-row">
        <img src={photo} alt="React Logo" className="img-thumbnail mx-1" />
      </div>
      <Project />
    </section>
  );
}

export default Portfolio;
