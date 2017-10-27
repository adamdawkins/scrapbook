import Scrapbook from './scrapbook'
import { compose, withProps } from 'recompose'


export default compose(
  withProps(
    () => ({
     title: 'Philadelphia Eagles 2017',
     items: [
       {
         link: "https://twitter.com/twitter/statuses/923536111619670016",
         title:"Behold, the quarterback in his natural habitat."
       },
       {
         link: "http://www.nfl.com/gamecenter/2017102300/2017/REG7/redskins@eagles#menu:gameinfo%7CcontentId%3A0ap3000000866306&tab=recap",
         title: "Watch Washington Redskins vs. Philadelphia Eagles"
       },
       {
         link: "https://www.ao1foundation.org",
         title: "Carson Wentz' Audience of One foundation"
       },
      ],
    })
  )
)(Scrapbook)
