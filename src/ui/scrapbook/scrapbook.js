import React from 'react'
import ScrapbookItem from '../scrapbook_item'
import Masonry from 'react-masonry-component'


const Scrapbook = ({Scrapbook: {  title, items }}) => ( 
  <div>
    <h1>{title}</h1>
    {items ? (
      <Masonry>
        {items.map(item => <ScrapbookItem item={item} key={item.id} />)}
      </Masonry>
    ): null}
  </div>
)

export default Scrapbook
