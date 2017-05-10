import React, { Component } from 'react'

class PollVoting extends Component {
  componentWillMount () {
    console.log('params', this.props.match)
  }

  render () {
    return (
      <div>
        {this.props.match.params.pollid}
      </div>
    )
  }
}

PollVoting.propTypes = {}
PollVoting.defaultProps = {}

export default PollVoting
