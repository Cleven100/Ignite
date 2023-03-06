import React from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in reacts',
    link: 'https:google.com'
}


export const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
   
      <RepositoryItem repository={repository.name}
        description={repository.description}
        link={repository.link}
        />
      <RepositoryItem repository="unform2" />
      <RepositoryItem repository="unform5" />
      <RepositoryItem repository="unform3" />
      <RepositoryItem />
        
      </ul>
    </section>
  );
};
