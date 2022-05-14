import React from "react";

const Paginarot = (props) => {

	const pagesLi = () => {

		//let li = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
		//let lengthLinks = props.pageData.meta
		//	console.log(JSON.parse(props))

		//console.log(props.pageData.meta.links.length)
		/* 	for (let index = 0; index < 7; index++) {
				//const element = array[index];
				lis[index] = <li key={index}>{index}</li> */
		//console.log(lis)
		return (
			<>
				<a href={props.pageData.links.first}>first </a>
				<a href={props.pageData.links.last} >last </a>
				<a href={props.pageData.links.prev} >prev </a>
				<a href={props.pageData.links.next}  >next</a>
			</>
		)
	}

	return (
		<div>
			<div>Parinator</div>
			<ul className="pagination">
				{props.rerender ? pagesLi() : null}
			</ul>
		</div>
	)
}

export default Paginarot