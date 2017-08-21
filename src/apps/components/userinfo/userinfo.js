import React from 'react';
import classNames from 'classnames';

export default class Userinfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			layerOpen: false,
			zoomIn: false,
			setServer: 'NA',
			broCash: '1,000',
			broPoint: '1,000',
		};
		this.addClass = this.addClass.bind(this);
		this.removeClass = this.removeClass.bind(this);
	}

	addClass() {
		this.setState({
			layerOpen: true,
			zoomIn:true
		});
	}

	removeClass() {
		this.setState({
			redText:false
		});
	}


	selectServer(server, e) {
		this.setState({
			setServer: server,
			isView: false,
		})

		console.log('개구리', this);
	}

	enterServer(e) {
		let elY = this.refs.serviceList.getBoundingClientRect().top,
		setY = e.target.getBoundingClientRect().top,
		calcY = setY - elY

		this.setState({
			calcY
		})
	}


	/* SERVER LIST MOUSEOVER */
	userserverEvent(isViewFlag) {
		this.setState({
			isView: isViewFlag
		})
		console.log(isViewFlag);
	}

	render() {

		return (
			<div>
				<section className="bro-userinfo">

					{/* bro cash */}
					<div className="block userCash">
						<em>{this.state.broCash}</em>
						<button className="addPoint">Add point</button>
					</div>
					{/* //bro cash */}

					{/* bro Point */}
					<div className="block userpoint"><em>1,000</em></div>
					{/* bro Point */}

					{/* userid */}
					<div className="block userid">
						<figure className="profile sm"><img src="images/_profile.jpg" alt=""/></figure>BLUEHOLE
					</div>
					{/* //userid */}

					{/* userserver */}
					<div className="block userserver">
						<p
							className="selectValue"
							onMouseEnter={() => this.userserverEvent(true)}
						>
							{this.state.setServer}
						</p>

						<div
							className={
								classNames("serviceList lineBlock-c arrow-top", {
									"isView" : this.state.isView,
								})
							}
							ref="serviceList"
						>
							<ul>
								<li
									onClick={(e) => this.selectServer('NA')}
									onMouseEnter={(e) => this.enterServer(e)}
									className={(this.state.setServer == 'NA') ? 'on' : ''}
								>
									<strong className="mark">NA</strong>
									<span>NORTH AMERICA</span>
									<i className="antenna level0">200ms</i>
								</li>

								<li
									onClick={(e) => this.selectServer('EU')}
									onMouseEnter={(e) => this.enterServer(e)}
									className={(this.state.setServer == 'EU') ? 'on' : ''}
								>
									<strong className="mark">EU</strong>
									<span>EROPEAN UNION</span>
									<i className="antenna level0">200ms</i>
								</li>

								<li
									onClick={(e) => this.selectServer('AS')}
									className={(this.state.setServer == 'AS') ? 'on' : ''}
									onMouseEnter={(e) => this.enterServer(e)}
								>
									<strong className="mark">AS</strong>
									<span>ASIA</span>
									<i className="antenna level1">200ms</i>
								</li>

								<li
									onClick={(e) => this.selectServer('OC', e)}
									className={(this.state.setServer == 'OC') ? 'on' : ''}
									onMouseEnter={(e) => this.enterServer(e)}
								>
									<strong className="mark">OC</strong>
									<span>ORANGE COUNTRY</span>
									<i className="antenna level2">200ms</i>
								</li>

								<li
									onClick={(e) => this.selectServer('SA', e)}
									className={(this.state.setServer == 'SA') ? 'on' : ''}
									onMouseEnter={(e) => this.enterServer(e)}
								>
									<strong className="mark">SA</strong>
									<span>SOUTH AMERICA</span>
									<i className="antenna level3">200ms</i>
								</li>
							</ul>
							<span
								className="activator animate" style={{top: this.state.calcY}}
							></span>
						</div>
					</div>
					{/* //userserver */}

					{/* useroption */}
					<div className="block useroption" onClick={this.addClass}>
						<p className="fa fa-bars fa-lg"></p>
					</div>
					{/* useroption */}
				</section>

				{/* OPTION 창  */}
				<div
					//className="serviceList optionBox lineBlock-c white"
					className={

						//key 값이 실제로 적용되는 className
						classNames("serviceList optionBox lineBlock-c white animated", {
							"layerOpen" : this.state.layerOpen,
							"fadeIn" : this.state.zoomIn
						})
					}
				>
					<ul>
						<li>SETTING</li>
						<li>CREDITS</li>
						<li>EXIT GAME</li>
					</ul>
				</div>
				{/* //OPTION 창  */}
			</div>
		);
	}
}
