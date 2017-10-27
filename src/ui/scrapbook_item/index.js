import React from 'react'

const ScrapbookItem = ({item: { link, title } }) => (
  <li><a href={link}>{title}</a></li>
)

export default ScrapbookItem
