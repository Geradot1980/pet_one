import React from "react"
import logoImg from './img/logo.png'
import logoNameImg from './img/logoname.jpg'
import loginImg from './img/login.jpg'
import searchImg from './img/search.jpg'

export default function Header() {
	return (
		<header className="header">

			<div>	<img className="logos" src={loginImg} alt="login" /></div>
			<div className="logoimgs">
				<img className="logoimg" src={logoImg} alt="logo" />
				<img className="logoname" src={logoNameImg} alt="logo" />
			</div>
			<div><img className="logos" src={searchImg} alt="login" /></div>
		</header>
	)
}