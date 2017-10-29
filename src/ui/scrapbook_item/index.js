import React from 'react'

const ScrapbookItem = ({item: { link, title, body } }) => (
  <div>
    <a href={link}>
      <h2>
        {title}
      </h2>
    </a>
    <p>{body}</p>
  </div>
)

export default ScrapbookItem
