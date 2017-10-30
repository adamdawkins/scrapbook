import React from 'react'
import { flattenProp, branch, renderComponent } from 'recompose'

const withLoadingComponent = branch(
  ({ data: { loading }}) => loading,
  renderComponent(() => <p>Loading...</p>)
)

const flattenData = flattenProp('data')

export {
  withLoadingComponent,
  flattenData,
}
