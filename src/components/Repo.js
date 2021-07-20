import React from 'react';

const Repo = ({ repo }) => {
  return (
    <li className="list-group-item">
      <i className="far fa-dot-circle mr-2"></i>
      {repo.name}
    </li>
  );
};

export default Repo;
