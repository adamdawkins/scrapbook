import Scrapbook from './scrapbook'
import { compose, withProps } from 'recompose'


export default compose(
  withProps(
    () => ({
     title: 'Philadelphia Eagles 2017',
     items: [
       {
         link: "https://twitter.com/twitter/statuses/923536111619670016",
         title:"Behold, the quarterback in his natural habitat.",
         body: "a paragraph or two about something or other?"
       },
       {
         link: "http://www.nfl.com/gamecenter/2017102300/2017/REG7/redskins@eagles#menu:gameinfo%7CcontentId%3A0ap3000000866306&tab=recap",
         title: "Watch Washington Redskins vs. Philadelphia Eagles",
         body: "maybe a quote?"
       },
       {
         link: "https://www.ao1foundation.org",
         title: "Carson Wentz' Audience of One foundation",
         body: "The Carson Wentz AO1 Foundation was launched in 2017 and its mission is to demonstrate the love of God by providing opportunities and support for the less fortunate and those in need.  Similar to Carson’s life motto and the tattoo on the underside of his right wrist, Carson’s foundation stands for “Audience of One.” No matter what he does in life, Carson is living for an Audience of One — Jesus."
       },
      ],
    })
  )
)(Scrapbook)
