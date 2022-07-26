import React, { useState, useEffect } from "react"
import PageCards from "./PageCards/PageCards";
import Paginator from "./Paginator/Paginator";

const BodyNews = () => {

	const [pageData, setPageData] = useState({})
	const [articlePage, setArticlePage] = useState()

	// это должно исключиться async/await
	const [rerender, setRerender] = useState(false)

	useEffect(() => {
		fetch('https://rosrezerv.gov.ru/api/news')
			.then(result => result.json())
			.then((json) => {
				setRerender(true)
				setPageData(json)
			})
	}, [])

	if (rerender) return (
		<>
			<div className="bodynews">
				{<PageCards cards={pageData.data} articlePage={articlePage} setArticlePage={setArticlePage} />}
			</div>
			<div><Paginator pageData={pageData} setPageData={setPageData} /></div>
		</>
	)
}

export default BodyNews