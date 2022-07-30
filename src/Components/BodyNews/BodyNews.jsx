import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import PageCards from "./PageCards/PageCards";
import Paginator from "./Paginator/Paginator";

const BodyNews = () => {

	const [searchParams, setSearchParams] = useSearchParams()
	const newsParams = searchParams.get('page') || '';

	const [pageData, setPageData] = useState({})
	const [articlePage, setArticlePage] = useState()
	const [rerender, setRerender] = useState(false)


	useEffect(() => {
		let targetHref = ''
		if (!!!newsParams) {
			targetHref = "https://rosrezerv.gov.ru/api/news";
		} else targetHref = `https://rosrezerv.gov.ru/api/news?page=${newsParams}`;
		fetch(targetHref)
			.then(result => result.json())
			.then((json) => {
				setRerender(true)
				setPageData(json)
			})
	}, [searchParams])

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