import React, { Component } from 'react'
import { Checkbox } from 'material-ui'
import { database } from './firebase'
import { shape, bool, string } from 'prop-types'

const propTypes = {
  match: shape({
    isExact: bool.isRequired,
    params: shape({
      pollid: string.isRequired
    }),
    path: string.isRequired,
    url: string.isRequired
  })
}

class PollVoting extends Component {
  state = {
    pollOptions: []
  }

  componentWillMount () {
    const pollid = this.props.match.params.pollid;
    database.ref(`/poll/${pollid}/pollOptions`).on('value', (snapshot) => {
      console.log('snapshot', snapshot.val());
      this.setState({
        pollOptions: [...this.state.pollOptions, ...snapshot.val()]
      })
    })
  }

  handleVote = (event) => {
    console.log('event', event.target)
  }

  render () {
    return (
      <div>
        {this.state.pollOptions.map((item, idx) =>
          <Checkbox
            key={idx}
            label={item.value}
            onCheck={this.handleVote}
          />
        )}
      </div>
    )
  }
}

PollVoting.propTypes = propTypes
PollVoting.defaultProps = {}

export default PollVoting
