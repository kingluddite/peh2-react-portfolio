/* eslint-disable import/no-dynamic-require */
import { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      image: 'project 1',
      title: 'project 1',
      category: 'html/css',
      githubLink: 'https://github.com/kingluddite/reactsensei.com',
    },
    {
      image: 'my image',
      name: 'project 2',
      category: 'javascript',
      githubLink: 'https://github.com/kingluddite/reactsensei.com',
    },
    {
      image: 'my image',
      title: 'project 3',
      appLink: 'https://reactsensei.com/',
      githubLink: 'https://github.com/kingluddite/reactsensei.com',
    },
    {
      image: 'my image',
      title: 'project 4',
      appLink: 'https://reactsensei.com/',
      githubLink: 'https://github.com/kingluddite/reactsensei.com',
    },
    {
      image: 'my image',
      title: 'project 5',
      appLink: 'https://reactsensei.com/',
      githubLink: 'https://github.com/kingluddite/reactsensei.com',
    },
    {
      image: 'my image',
      title: 'project 6',
      appLink: 'https://reactsensei.com/',
      githubLink: 'https://github.com/kingluddite/reactsensei.com',
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, index) => (
          <img
            // eslint-disable-next-line global-require
            src={require(`../../assets/img/projects/${index + 1}.png`).default}
            alt={project.title}
            className="img-thumbnail mx-1"
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
