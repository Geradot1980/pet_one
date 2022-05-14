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

		for (let index = 0; index < links.length; index++) {
			aList[index] = <li key={index}
				className={links[index].active ? "active" : "none"}>
				<a href={links[index].url}
					onClick={clickLink}>
					{links[index].label}</a></li>
		}
		return (
			<ul className="pagination">
				{aList}
			</ul>
		)
	}

	return (
		<div>
			{props.rerender ? pagesLi() : null}
		</div>
	)
}

export default Paginarot