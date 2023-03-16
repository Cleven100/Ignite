import React from 'react'

export const RepositoryItem = (props) => {
  if (!props.repository) {
    return null;
  }

  return (
    <div>
        <li>
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    </div>
  )
}