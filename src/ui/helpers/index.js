import React from 'react'
import { branch, renderComponent} from 'recompose'

export const withLoadingComponent = branch(
  ({ data: { loading }}) => loading,
  renderComponent(() => <p>Loading...</p>)
)
