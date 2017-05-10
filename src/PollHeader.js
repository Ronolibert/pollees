import React from 'react'
import { TextField } from 'material-ui'
import { func, string } from 'prop-types'

const style = {
  fontWeight: 'bold'
}

const PollHeader = ({ handleQuestionInput, question }) => (
  <div className='poll-header'>
    <TextField
      fullWidth
      hintText='Please enter your question'
      multiLine
      onChange={handleQuestionInput}
      rows={2}
      style={style}
      value={question}
    />
  </div>
)

PollHeader.propTypes = {
  handleQuestionInput: func.isRequired,
  question: string.isRequired
}

export default PollHeader
