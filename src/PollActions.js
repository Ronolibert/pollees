import React from 'react'
import { RaisedButton } from 'material-ui'
import { func } from 'prop-types'

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: 128
  }
}

const propTypes = {
  resetAll: func.isRequired,
  submitPoll: func.isRequired
}

const PollActions = ({ resetAll, submitPoll }) => (
  <div style={style.container}>
    <RaisedButton
      onClick={resetAll}
      label='Reset'
      secondary
      style={style}
    />
    <RaisedButton label='Create Poll' primary onClick={submitPoll} />
  </div>
)

PollActions.propTypes = propTypes

export default PollActions
