import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout = () => {
	return (
		<div className="layout-container">
			<Header />
			<div className="outlet-container">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout