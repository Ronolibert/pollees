import React from 'react'
import { Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Landing from './Landing'
import PollVoting from './PollVoting'
import Results from './Results'

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <div>
      <Route path='/' component={Landing} />
      <Route path='/poll/:pollid' component={PollVoting} />
      <Route path='/poll/:pollid/results' component={Results} />
    </div>
  </MuiThemeProvider>
)

export default App
