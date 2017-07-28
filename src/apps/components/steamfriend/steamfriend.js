import React from 'react';

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


class Steamfriend extends React.Component {

	render() {
		return (
			<div>
				{/* STEAMFRIEND LIST */}
				<article className="steamFriend-list lineBlock-c arrow-bottom" style={{display: "none"}}>
					<header className="cmptHeaer">
						<h3>FRIENDS</h3>

						<span className="option">
							<button className="fa fa-user-plus fa-lg"></button>
							<button className="fa fa-envelope fa-lg">
								<i className="badge">99</i>
							</button>
						</span>

						<section className="searchArea">
							<input type="text" className="search" placeholder="SEARCH. USER ID" />
							<button className="fa fa-undo fa-lg"></button>
						</section>
					</header>

					<div className="scroll list">
						<ReactScrollbar style={styles.attt}>
						<h4 className="team">TEAM (0)</h4>
						<section className="userList">
							<ul>
								<Singleslot />
								<Singleslot />
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>
								</li>
							</ul>
						</section>

						<h4 className="active">ONLINE (3)</h4>
						<section className="userList">
							<ul>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
								<li>
									<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
									<strong>id11121431231</strong>

									<div className="option">
										<button className="fa fa-plus-circle fa-lg"></button>
										<button className="fa fa-info-circle fa-lg"></button>
									</div>

									<p className="tip sm arrow-right" style={{display: 'block'}}>
										You can no longer invite<br/>more people.
									</p>
								</li>
							</ul>
						</section>

						<h4 className="deactive">OFFLINE (3)</h4>
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

class Singleslot extends React.Component {
	render() {
		return (
			<li>
				<figure className="profile mg"><img src="images/_profile.jpg" alt=""/></figure>
				<strong>aaaa</strong>

				<div className="option">
					<button className="fa fa-plus-circle fa-lg"></button>
					<button className="fa fa-info-circle fa-lg"></button>
				</div>

				<p className="tip sm arrow-right" style={{display: 'block'}}>
					You can no longer invite<br/>more people.
				</p>
			</li>
		)
	}
}


export default Steamfriend;