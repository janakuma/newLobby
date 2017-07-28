import React from 'react';

export default class Chat extends React.Component {
	render() {
		return (
			<article className="component chat">
				<nav className="tabBlock">
					<button className="on">CHAT</button>
					<button>CHAT</button>
				</nav>

				<div className="chat-message lineBlock-c">
					<ul>
						<li>
							<i>[huong888]</i>Hello, front desk, how may I help you?
						</li>
						<li>
							<i>[huong888]</i>Hello, front desk, how may I help you?
						</li>
						<li>
							<i>[huong888]</i>Hello, front desk, how may I help you? Hello, front desk, how may I help you?
						</li>
						<li>
							<i>[huong888]</i>Hello, front desk, how may I help you?
						</li>
						<li className="notice">HEECHANPark joined the team</li>
					</ul>

				</div>

				<div className="chat-input">
					<input type="text" className="typeArea" placeholder="Press Enter to start the conversation" />
					<button>A</button>
				</div>
			</article>
		);
	}
}
