import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MatchMode extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modeType: '',
			imgPath : '',
			activate: '',
			random: ''
		}
		this.selectMatch = this.selectMatch.bind(this);
	}

	selectMatch(e) {

		/* if(e != 'SOLO') {
			this.setState({
				random: true,
				modeType: e

			})
		} else {
			this.setState({
				random: false,
				modeType: e
			})
		} */

		this.setState({
			activate: true,
			random: true,
			modeType: e
		})

		console.log(e);
	}


	render() {
		return (
			<button
				onClick={(e) => this.selectMatch(this.props.modeType)}
				className={classNames({
					'on': this.state.activate
				})}
			>
				<img src={this.props.imgPath} alt="DUO"/>
				<span>{this.props.modeType}</span>
			</button>
		);
	}
}


class PlayMode extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="match cursor playMode">
				<span>{this.props.modeType} MODE</span>
				<p>PLAY</p>
			</div>
		);
	}
}


export default class Usermatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modeType: 'SOLO111z'
		}
	}

	render() {
		return (
			<article className="usermatch">

				{/* CUSTOM MATCH */}
				<div className="match custom active">
					CUSTOM MATCH
					<p className="tip lg arrow-right" style={{display: 'block'}}>
						You can no longer invite<br/>more people.
					</p>
				</div>
				{/* //CUSTOM MATCH */}

				{/* TEAM MATCH */}
				<div className="match team">
					<h3 className="match-label">TEAM MATCH</h3>
					<div className="selectMatch">

						<MatchMode imgPath="images/common/match-solo.png" modeType="SOLO" activate="true" />
						<MatchMode imgPath="images/common/match-duo.png" modeType="DUO"/>
						<MatchMode imgPath="images/common/match-squard.png" modeType="SQUARD"/>

						{/*
							<button
								onClick={(e) => this.selectMatch('SOLO')}
								className={
									classNames({
										"on" : this.state.activate
									})
								}
							>
								<img src="images/common/match-solo.png" alt="SOLO"/>
								<span>SOLO</span>
							</button>

							<button
								onClick={(e) => this.selectMatch('DUO')}
								className={
									classNames({
										"on" : this.state.activate
									})
								}
							>
								<img src="images/common/match-duo.png" alt="DUO"/>
								<span>DUO</span>
							</button>

							<button
								onClick={(e) => this.selectMatch('SQUARD')}
								className={
									classNames({
										"on" : this.state.activate
									})
								}
							>
								<img src="images/common/match-squard.png" alt="SQUARD"/>
								<span>SQUARD</span>
							</button>
						*/}
					</div>

					<button
						className={
							classNames('btn-random', {
								//'able' : this.state.random
							})
						}
					>
						FIND RANDOM TEAMMATE
					</button>

					<p className="tip lg arrow-right" style={{display: 'block'}}>
						You can no longer invite<br/>more people.
					</p>
				</div>
				{/* //TEAM MATCH */}

				{/* PLAYMODE */}
				{/* <div className="match cursor playMode">
					<span>{this.state.modeType} MODE</span>
					<p>PLAY</p>
				</div> */}

				<PlayMode modeType={this.state.modeType} />
				{/* //PLAYMODE */}

			</article>
		);
	}
}
