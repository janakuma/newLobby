import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectUser} from '../actions/index';




/* PLUGIN */
import ReactScrollbar from 'react-scrollbar-js';

let calc = (el_val) => {
	return (el_val/1080) * 100 + 'vh';
};

const styles = {}
styles.attt = {
	width: calc(324),
	height: calc(476)
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectUser : selectUser}, dispatch)
}

class Steamfriend extends React.Component {

	createListItems(condition) {
		return this.props.users
			.filter(user => user.condition == condition)
			.map((user, index) => {
				return (
					<li key={index}>
						<figure className="profile mg"><img src={user.thumnail} alt=""/></figure>
						<strong>{user.username}</strong>

						<div className="option">
							<button className="fa fa-plus-circle fa-lg"></button>
							<button className="fa fa-info-circle fa-lg"></button>
						</div>

						<p className="tip sm arrow-right" style={{display: 'none'}}>
							You can no longer invite<br/>more people.
						</p>
					</li>
				);
		});
	}

	searchUser(inputValue) {
		console.log(inputValue);
	}

	render() {
		return (
			<div>
				{/* STEAMFRIEND LIST */}
				<article className="steamFriend-list lineBlock-c arrow-bottom" style={{display: "block"}}>
					<header className="cmptHeaer">
						<h3>FRIENDS ({this.props.users.length})</h3>

						<span className="option">
							<button className="fa fa-user-plus fa-lg"></button>
							<button className="fa fa-envelope fa-lg">
								<i className="badge">99</i>
							</button>
						</span>

						<section className="searchArea">
							<input type="text" className="search" placeholder="SEARCH. USER ID" onChange={() => this.props.searchUser('aaa')}/>
							<button className="fa fa-undo fa-lg"></button>
						</section>
					</header>

					<div className="scroll list">
						<ReactScrollbar style={styles.attt}>
						<h4 className="team">TEAM ({this.createListItems('team').length})</h4>
						<section className="userList">
							<ul>
								{this.createListItems('team')}
							</ul>
						</section>

						<h4 className="active">ONLINE ({this.createListItems('online').length})</h4>
						<section className="userList">
							<ul>
								{this.createListItems('online')}
							</ul>
						</section>

						<h4 className="deactive">OFFLINE ({this.createListItems('offline').length})</h4>
						<section className="userList">
							<ul>
								{this.createListItems('offline')}
							</ul>
						</section>
						</ReactScrollbar>
					</div>

				</article>
				{/* //STEAMFRIEND LIST */}

				{/* INVITATIONS */}
				<article className="invitations lineBlock-c arrow-left" style={{display: "none"}}>
					<header className="cmptHeaer">
						<h3>INVITATIONS</h3>
					</header>

					<div className="scroll list">
						<section className="userList">
							<ul>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-check-circle fa-lg"></button>
										<button className="fa fa-times-circle fa-lg"></button>
									</div>
								</li>

								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>
								</li>
							</ul>
						</section>
					</div>
				</article>
				{/* //INVITATIONS */}

				{/* STEAMFRIEND THUMNAIL */}
				<article className="steamFriend clearfix">
					<section className="steamGroup">
						<div className="steamSignal">
							<p className="tip lg arrow-bottom">
								<i>Receive team invitation</i><br/>
								Press to change status
							</p>
						</div>
						<div className="steamMulti">32</div>

						<div className="slot ready">
							<span className="thum"></span>
						</div>
					</section>

					<section className="steamSingle">
						<div className="slot ready">
							<span className="thum">
								<img src="images/_profile.jpg" alt=""/>
							</span>

							<p className="tip sm arrow-bottom">
								Bluehole studio
							</p>
						</div>

						<div className="slot">
							<span className="thum"></span>
						</div>

						<div className="slot">
							<span className="thum"></span>
						</div>
					</section>

					<button className="btn-leave">LEAVE TEAM</button>
				</article>
				{/* //STEAMFRIEND THUMNAIL */}

				{/* ADD FRIENDS */}
				<article className="addFriend lineBlock-c"  style={{left: '500px', display: 'none'}}>
					<header className="cmptHeaer">
						<h3>ADD FRIENDS</h3>

						<section className="searchArea">
							<input type="text" className="search" placeholder="Please enter your friend nickname" />
							<button className="fa fa-search fa-lg"></button>
						</section>
					</header>

					<div className="scroll list">
						<section className="userList">
							<ul>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-ban fa-lg"></button>
										<button className="fa fa-times-circle fa-lg"></button>
										<button className="fa fa-check-circle fa-lg"></button>
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>
								</li>

								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>
								</li>

								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>BBB</strong>
								</li>
							</ul>
						</section>
					</div>
				</article>
				{/* //ADD FRIENDS */}
			</div>
		);
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Steamfriend);