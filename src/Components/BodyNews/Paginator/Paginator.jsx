import React from "react";
import { Link } from "react-router-dom";

const Paginator = (props) => {

	function clickLink(event) {
		let targetHref;
		if (event) {
			targetHref = "https://rosrezerv.gov.ru/api/" + event.target.href.slice(event.target.href.lastIndexOf("news"));
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
		let currentPageLi;


		if (links.length > 0) {
			for (let index = 0; index < links.length; index++) {
				// заменяем на нормальные стрелки.
				links[index].label = links[index].label.replace('&laquo;', '«').replace('&raquo;', '»')

				// добавляем пункт загрузить еще
				if ((links[index].active) && ((+links[index].label + 15) < (+links[links.length - 2].label))) {
					currentPageLi = <li>
						<Link to={"/pet_one/news?page=" + (+links[index].label + 15)}
							onClick={clickLink}>
							Загрузить еще</Link></li>
				}
				if (links[index].url) {
					// генерируем элементы пагинатора
					aList[index] = <li key={index}
						className={links[index].active ? "active" : ""}>
						<Link to={links[index].url ? "/pet_one/" + links[index].url.slice(links[index].url.lastIndexOf("news")) : ""}
							onClick={clickLink}>
							{links[index].label}</Link></li>
				} else {
					aList[index] = <li key={index}>	{links[index].label}</li>
				}
			}
		}

		return (
			<div className="pagination-contaener">
				<hr />
				<ul className="pagination">
					{aList}
				</ul>
				<ul className="pagination">
					{currentPageLi}
				</ul>
			</div>
		)
	}

	return (
		<>
			{pagesLi()}
		</>
	)
}

export default Paginator