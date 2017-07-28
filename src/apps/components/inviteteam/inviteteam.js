import React from 'react';

export default class Inviteteam extends React.Component {
	render() {
		return (
			<article className="inviteTeam" style={{display: "none"}}>
				<nav className="tabBlock">
					<button className="on">ID 11223</button>
					<button>ID 112236</button>
					<button>ID 112236</button>
					<button>ID 11223</button>
				</nav>

				<div className="invite-message lineBlock-c clearfix">
					<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
					<p>
						<span className="pointColor">ALOHADANCETV</span> has applied for a team invitation.
					</p>
				</div>

				<div className="group-btn lineBlock-c">
					<button className="btn sm able">OK</button>
					<button className="btn sm disable">CANCEL</button>
				</div>
			</article>
		);
	}
}
