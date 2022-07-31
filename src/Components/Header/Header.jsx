import React from "react"
import logoImg from './img/logo.png'
import logoNameImg from './img/logoname.jpg'
import loginImg from './img/login.jpg'
import searchImg from './img/search.jpg'
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<header>
			<div className="header-container">
				<div>
					<img className="logos" src={loginImg} alt="login" />
				</div>
				<Link to="/pet_one/">
					<div className="logoimgs">
						<img className="logoimg" src={logoImg} alt="logo" />
						<img className="logoname" src={logoNameImg} alt="logo" />
					</div>
				</Link>
				<div>
					<img className="logos" src={searchImg} alt="login" />
				</div>
			</div>
			<hr />
		</header>
	)
}