import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Usermatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'SOLO',
			able: false
		}
	}

	selectMatch(mode) {
		console.log('currentMode', mode);
		this.setState({selected: mode});

		if(mode == 'SOLO') {
            this.setState({able: ''});
        } else {
            this.setState({able: 'able'});
		}
	}

	isActive(mode) {
		console.log('isActive', mode);
		return ((mode == this.state.selected) ? 'on' : '');
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

						<button
							onClick={() => this.selectMatch('SOLO')}
							className={
								this.isActive('SOLO')
							}
						>
							<img src="images/common/match-solo.png" alt="SOLO"/>
							<span>SOLO</span>
						</button>

						<button
							onClick={() => this.selectMatch('DUO')}
							className={
								this.isActive('DUO')
							}
						>
							<img src="images/common/match-duo.png" alt="DUO"/>
							<span>DUO</span>
						</button>

						<button
							onClick={() => this.selectMatch('SQUARD')}
							className={
								this.isActive('SQUARD')
							}
						>
							<img src="images/common/match-squard.png" alt="SQUARD"/>
							<span>SQUARD</span>
						</button>

					</div>

					<button className={'btn-random ' + (this.state.able)}>
						FIND RANDOM TEAMMATE
					</button>

					<p className="tip lg arrow-right" style={{display: 'block'}}>
						You can no longer invite<br/>more people.
					</p>
				</div>
				{/* //TEAM MATCH */}

				{/* PLAYMODE */}
				<div className="match cursor playMode">
					<span>{this.state.selected} MODE</span>
					<p>PLAY</p>
				</div>
				{/* //PLAYMODE */}

			</article>
		);
	}
}
