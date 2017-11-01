require('isomorphic-fetch')
// export default event => {
//   console.log('getting link title')
//   event.data.title = 'a'
//   return event
// }

const getLinkTitle = async function () {
  const result = await fetch("http://www.nfl.com/news/story/0ap3000000867010/article/qb-index-week-8-carson-wentz-sparking-mvp-chatter")
  console.log(result)
}

getLinkTitle();
