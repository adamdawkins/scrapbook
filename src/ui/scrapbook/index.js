import Scrapbook from './scrapbook'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import query from './get_scrapbook.graphql'
import { compose } from 'recompose'
import { flattenData, withLoadingComponent } from '../helpers'

console.log({query})
const data = graphql(gql(query))

export default compose(
  data,
  withLoadingComponent,
  flattenData,
)(Scrapbook)
