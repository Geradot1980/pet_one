import React from "react";

const Paginarot = (props) => {

	function clickLink(event) {
		let targetHref;
		if (event) {
			event.preventDefault()
			targetHref = event.target.href;
		} else targetHref = 'https://rosrezerv.gov.ru/api/news';
		fetch(targetHref)
			.then(result => result.json())
			.then((json) => {
				props.setPageData(json)
			})
			.catch(err => console.error(err));
	}

	const pagesLi = () => {
		let aList = []
		let links = props.pageData.meta.links
		let currentPage;
		let currentPageLi;


		for (let index = 0; index < links.length; index++) {
			// заменяем на нормальные стрелки.
			links[index].label = links[index].label.replace('&laquo;', '«').replace('&raquo;', '»')

			if ((links[index].active) && ((+links[index].label + 15) < (+links[links.length - 2].label))) {
				console.log(+links[index].label + 15)
				currentPage = links[index].label
				currentPageLi = <li>
					<a href={"https://rosrezerv.gov.ru/api/news?page=" + (+links[index].label + 15)}
						onClick={clickLink}>
						Загрузить еще</a></li>
				console.log(currentPage)
			}
			// генерируем элементы пагинатора

			aList[index] = <li key={index}
				className={links[index].active ? "active" : "none"}>
				<a href={links[index].url}
					onClick={clickLink}>
					{links[index].label}</a></li>
		}
		console.log((links[links.length - 2].label))




		return (
			<>
				<ul className="pagination">
					{aList}
				</ul>
				<ul className="pagination">
					{currentPageLi}
				</ul>
			</>
		)
	}

	return (
		<>
			{pagesLi()}
		</>
	)
}

export default Paginarot