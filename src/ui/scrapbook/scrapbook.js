import React from 'react'
import ScrapbookItem from '../scrapbook_item'


const Scrapbook = ({ title, items }) => (
  <div>
    <h1>{title}</h1>
    {items ? (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => 
          <ScrapbookItem item={item} key={item.link} />
        )}
      </ul>
    </div>
      ): null}
  </div>
)

export default Scrapbook
