import React from 'react'

export const RepositoryItem = (props) => {
  return (
    <div>
        <li>
          <strong>{props.repository ?? "Default" }</strong>
          <p>{props.description}</p>

          <a href={props.link}>Acessar repositório</a>
        </li>
    </div>
  )
}
