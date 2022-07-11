import React, { useState, useEffect } from "react"
import PageCards from "./PageCards/PageCards";
import Paginarot from "./Paginarot/Paginarot";

const BodyNews = () => {

	const [pageData, setPageData] = useState({})

	// это должно исключиться async/await
	const [rerender, setRerender] = useState(false)
	//console.log('pageData: ', pageData);

	useEffect(() => {
		fetch('https://rosrezerv.gov.ru/api/news')
			.then(result => result.json())
			.then((json) => {
				setRerender(true)
				setPageData(json)
			})
	}, [])

	if (rerender) {
		return (
			<container >
				<div className="bodynews">
					{<PageCards cards={pageData.data} />}
				</div>
				<Paginarot pageData={pageData} setPageData={setPageData} />
			</container>
		)
	}
}
export default BodyNews