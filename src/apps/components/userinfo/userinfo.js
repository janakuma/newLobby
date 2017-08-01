import React from 'react';
import classNames from 'classnames';

export default class Userinfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			layerOpen: false,
			zoomIn: false,
			setServer: 'NA'
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


	selectServer(server) {
		this.setState({
			setServer: server
		})
		console.log(server)
	}

	render() {

		return (
			<div>
				<section className="bro-userinfo">

					{/* bro cash */}
					<div className="block userCash">
						<em>1,000</em>
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
						<p className="selectValue">{this.state.setServer}</p>

						<div className="serviceList lineBlock-c arrow-top">
							<ul>
								<li onClick={() => this.selectServer('NA')}>
									<strong className="mark">NA</strong>
									<span>NORTH AMERICA</span>
									<i className="antenna level0">200ms</i>
								</li>

								<li onClick={() => this.selectServer('EU')}>
									<strong className="mark">EU</strong>
									<span>EROPEAN UNION</span>
									<i className="antenna level0">200ms</i>
								</li>

								<li onClick={() => this.selectServer('AS')}>
									<strong className="mark">AS</strong>
									<span>ASIA</span>
									<i className="antenna level1">200ms</i>
								</li>

								<li onClick={() => this.selectServer('OC')}>
									<strong className="mark">OC</strong>
									<span>ORANGE COUNTRY</span>
									<i className="antenna level2">200ms</i>
								</li>

								<li onClick={() => this.selectServer('SA')}>
									<strong className="mark">SA</strong>
									<span>SOUTH AMERICA</span>
									<i className="antenna level3">200ms</i>
								</li>
							</ul>
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
