import React from 'react'
import { TextField } from 'material-ui'
import { arrayOf, shape, string, func } from 'prop-types'

const PollBody = ({ pollOptions, handlePollInput }) => (
  <div>
    {pollOptions.map((poll, idx) => (
      <TextField
        fullWidth
        hintText='Enter poll option'
        key={idx}
        onChange={event => handlePollInput(event, idx)}
        value={poll.value}
      />
    ))}
  </div>
)

PollBody.propTypes = {
  pollOptions: arrayOf(
    shape({
      value: string.isRequired
    })
  ).isRequired,
  handlePollInput: func.isRequired
}

export default PollBody
