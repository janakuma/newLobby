import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Match
} from 'react-router-dom';
import Swiper from 'react-id-swiper';

/* LAYOUT */
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';

/* COMMON */
import Userinfo from '../userinfo/userinfo';
import Usermatch from '../usermatch/usermatch';
import Inviteteam from '../inviteteam/inviteteam';
import Steamfriend from '../steamfriend/steamfriend';
import Chat from '../chat/chat';

export default class App extends React.Component {

	render() {
		return (
			<div className="wrapper">
				<Router>
					<div>
						<header className="bro-header clearfix">
							<h1 className="logo"><img src="images/common/pubg-logo.png" alt="PUBG"/></h1>

							<nav className="bro-gnb">
								<ul className="clearfix">
									<li>
										<NavLink to="/" exact activeClassName="active">home</NavLink>
									</li>
									<li>
										<NavLink to="/about" activeClassName="active">character</NavLink>
									</li>
									<li>
										<NavLink to="/contact" activeClassName="active">rewards</NavLink>
									</li>
								</ul>
								<i id="aa" className="activator"></i>
							</nav>

							<Userinfo></Userinfo>
						</header>

						<Route path="/" exact component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/contact" component={Contact}/>
					</div>
				</Router>

				<Inviteteam></Inviteteam>
				<Usermatch></Usermatch>
				<Steamfriend></Steamfriend>
				<Chat></Chat>

				<section className="banner">
					<Swiper>
						<div>Slide 1</div>
						<div>Slide 2</div>
						<div>Slide 3</div>
						<div>Slide 4</div>
						<div>Slide 5</div>
					</Swiper>
				</section>



				{/* POP-MESSAGE */}
				<div className="pop-message lineBlock-c" style={{display: "none"}}>
					GAME MATCH CANCELED
				</div>
				{/* //POP-MESSAGE */}

				{/* POP-ALERT */}
				<div className="pop-alert" style={{display: "none"}}>
					<p>
						Do you really want to leave the team?<br/>
						Do you really want to leave the team?
					</p>
					<div className="group-btn dFlex">
						<button className="flex1">YES</button>
						<button className="flex1">NO</button>
					</div>
				</div>
				{/* //POP-ALERT */}
			</div>
		);
	}
}