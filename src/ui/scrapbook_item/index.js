import React from 'react'
import { Tweet } from 'react-twitter-widgets'
import { branch, compose, renderComponent } from 'recompose'

const renderTweet = branch(
  ({ item: { link }}) => (link.indexOf('twitter') > -1),
  renderComponent(({item: { link }}) => {
    const splitLink = link.split('/')
    const tweetId = splitLink[splitLink.length - 1]

    return (
      <div className="item item--tweet">
        <Tweet tweetId={tweetId} />
      </div>
    )
  })
)

const renderImage = branch(
  ({ item: { link } }) => (link.indexOf('.jpg') > -1),
  renderComponent(({ item: { link, title } }) => {
    return (
      <div className="item">
        <img src={link} alt={title} />
        <h2>{title}</h2>
      </div>
    )
  })
)
const ScrapbookItem = ({item: { link, title, body } }) => (
  <div className="item">
    <a href={link}>
      <h3>
        {title}
      </h3>
    </a>
    <p>{body}</p>
  </div>
)

export default compose(
  renderTweet,
  renderImage
)(ScrapbookItem)
