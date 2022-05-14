import React, { useState, useEffect } from "react"
import Paginarot from "./Paginarot/Paginarot";

const BodyNews = () => {

	const [pageData, setPageData] = useState({})
	const [rerender, setRerender] = useState(false)
	console.log('pageData: ', pageData);
	useEffect(() => {
		//console.log(rerender)
		fetch('https://rosrezerv.gov.ru/api/news')
			.then(result => result.json())
			.then((json) => {
				setPageData(json)
				//	console.log(`first`)
				setRerender(true)
				//	console.log(rerender)
			})
	}, [])

	function clickLink(event) {
		let targetHref;
		if (event) {
			event.preventDefault()
			targetHref = event.target.href;
		} else targetHref = 'https://rosrezerv.gov.ru/api/news';
		fetch(targetHref)
			.then(result => result.json())
			.then((json) => {
				setPageData(json)
			})
			.catch(err => console.error(err));
	}

	return (
		<>
			<h1>!!!</h1>
			<p>Размерность пагинатора: </p>
			{/* 	<a onClick={clickLink} href={pageData.links.first} >first </a>
			<a onClick={clickLink} href={pageData.links.last} >last </a>
			<a onClick={clickLink} href={pageData.links.prev} >prev </a>
			<a onClick={clickLink} href={pageData.links.next}  >next</a> */}
			<Paginarot
				pageData={pageData}
				setPageData={setPageData}
				rerender={rerender}
			/>

			{<pre>{JSON.stringify(pageData.meta, null, 2)}</pre>}


		</>
	)
}
export default BodyNews