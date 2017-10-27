import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'recompose'

// import queryString from './hello.graphql'

const data = graphql(gql`
  query hello {
    hello {
      message
    }
  }
`)

const Hello = ({data: { loading, hello } }) => { 
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  return(
    <p>{hello.message}</p>
  )
}

export default compose(
  data,
)(Hello)
