import React, { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";
import '../Styles/repositories.css'



export const RepositoryList = () => {


const [repositories, setRepositories] = useState([]);

useEffect(() => {
 fetch('https://api.github.com/orgs/rocketseat/repos')
 .then(response => response.json())
 .then(data => setRepositories(data))


}, []);




  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
   
       {repositories.map(repository => {
        return  <RepositoryItem repository={repository} />
       })}
      <RepositoryItem />

      <Counter />
        
      </ul>
    </section>
  );
};
