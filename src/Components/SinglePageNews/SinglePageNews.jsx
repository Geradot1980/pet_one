import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import NotFound from "../NotFound/NotFound"


const SinglePageNews = () => {

	const id = useParams().id
	const [articleData, setArticleData] = useState()

	useEffect(() => {
		let targetHref = "https://rosrezerv.gov.ru/api/news/" + id;
		fetch(targetHref)
			.then(result => result.json())
			.then(data => {
				setArticleData(data)
			})
			.catch(err => console.error(err));
	}, [])


	function chngR() {
		const div = document.getElementById('divText')
		if (div !== null) {
			div.innerHTML = articleData.data.text
		}
	}





	/* 	if (!!paramReads) {
			console.log('change') */
	if (articleData) {

		return (
			<div className="spn-container">
				<div className="spn-imagecontainer">
					<img className="spn-articleimage" src={articleData.data.image} alt={articleData.data.preview} />
				</div>
				<div className="spn-textcontainer">
					<h1>{articleData.data.title}</h1>
					<h3>{articleData.data.preview}</h3>
					<div id="divText">{articleData.data.text}</div>
					<h6> {articleData.data.author.title}</h6>
					<hr />
					<h5>{articleData.data.date.slice(0, 10)}</h5>
				</div>
				{chngR()}
			</div>
		)
	} /* else {
		console.log('NotFind');
		return < NotFound />
	} */
	/* 	} else console.log('BAH!') */
}

export default SinglePageNews