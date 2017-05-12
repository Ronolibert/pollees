import React, { Component } from 'react'
import update from 'immutability-helper'
import { database } from './firebase'
import PollHeader from './PollHeader'
import PollBody from './PollBody'
import PollActions from './PollActions'

const style = {
	container: {
		width: 400,
		height: 'auto'
	}
}

class Landing extends Component {
	state = {
		question: '',
		pollOptions: [{value: '', votes: 0}, {value: '', votes: 0}, {value: '', votes: 0}]
	}

	handleOptionAmounts = () => {
		let otherOptionsFilled = true
		this.state.pollOptions.forEach((opt) => {
			if (opt.value === '') {
				otherOptionsFilled = false
			}
		})

		if (otherOptionsFilled) {
			this.addPollOption()
		}
	}

	handleQuestionInput = (event) => {
		this.setState({
			question: event.target.value
		})
	}

	handlePollInput = (event, index) => {
		const { pollOptions } = this.state
		const value = event.target.value
		const newState = update(pollOptions, { [index]: { value: { $set: value } }})
		this.setState({ pollOptions: newState })
		this.handleOptionAmounts()
	}

	addPollOption = () => {
		const newState = [...this.state.pollOptions, { value: '', votes: 0}]
		this.setState({
			pollOptions: newState
		})
	}

	resetAll = () => {
		const { pollOptions } = this.state
		const newState = pollOptions.map((opt) => {
			opt.value = ''
			return opt
		})
		this.setState({
			question: '',
			pollOptions: newState
		})
	}

	submitPoll = () => {
		const { question, pollOptions } = this.state
		const { history } = this.props
		const req = database.ref('/poll').push({ question: question, pollOptions })
		history.push(`/poll/${req.key}`)
	}

	render() {
		const { question, pollOptions } = this.state
		return (
			<div style={style.container}>
				<PollHeader
					handleQuestionInput={this.handleQuestionInput}
					question={question}
				/>
				<PollBody
					handlePollInput={this.handlePollInput}
					pollOptions={pollOptions}
				/>
				<PollActions
					resetAll={this.resetAll}
					submitPoll={this.submitPoll}
				/>
			</div>
		)
	}
}

export default Landing
