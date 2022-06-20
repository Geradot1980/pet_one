import React, { useState, useEffect } from "react"
import PageCards from "./PageCards/PageCards";
import Paginarot from "./Paginarot/Paginarot";

const BodyNews = () => {

	const [pageData, setPageData] = useState({})

	// это должно исключиться async/await
	const [rerender, setRerender] = useState(false)
	//console.log('pageData: ', pageData);

	/* 	async function fetchNews() {
			console.log(rerender)
			fetch('https://rosrezerv.gov.ru/api/news')
				.then(result => result.json())
				.then((json) => {
					setPageData(json)
					//	console.log(`first`)
					setRerender(true)
					//	console.log(rerender)
				})
		}
	
		useEffect(fetchNews, []) */

	/* 	useEffect(() => {
			async function fetchNews() {
				const result = await fetch('https://rosrezerv.gov.ru/api/news')
				const json = await result.json()
				setRerender(true)
				setPageData(json)
			}
			fetchNews()
			//console.log(`Статус: ${rerender}`)
			//console.log(pageData);
		}
			, []) */


	useEffect(() => {

		fetch('https://rosrezerv.gov.ru/api/news')
			.then(result => result.json())
			.then((json) => {
				setRerender(true)
				setPageData(json)
			})
	}, [])

	/* function clickLink(event) {
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
 */
	if (rerender) {
		return (
			<>
				{/* 				<Paginarot pageData={pageData} setPageData={setPageData} rerender={rerender} />
 */}
				тут карты типа
				{/* <PageCards pageData={pageData} /> */}
				{<PageCards cards={pageData.data} />}


				<Paginarot pageData={pageData} setPageData={setPageData} />
				{/* {<pre>{JSON.stringify(pageData.meta, null, 2)}</pre>} */}


			</>
		)
	}
}
export default BodyNews