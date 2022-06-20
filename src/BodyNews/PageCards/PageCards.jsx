import React from "react";
import { useRef } from "react";


const PageCards = (props) => {

	//const divCardText = useRef(null)
	const divCards = useRef(null)
	let cards = props.cards

	function cardSize(divCards) {
		if (divCards.current)
			return (divCards.current.offsetWidth - 50) / 3
	}

	function genarateCards(flexBasis) {
		let num = 200;
		let flexBasisFull = {
			"flex-basis": flexBasis + "px"
		};
		console.log(flexBasisFull)
		let cardsList = cards.map(card => <article style={flexBasisFull} key={card.id} className="article" >
			<img className="article__image" src={card.image} alt={card.title} />
			<h4>{card.title}</h4>
			<div>{card.preview.slice(0, 250)} <span><a href={card.link} target="_blank" rel="noopener noreferrer" >...»</a></span> </div>
			<div><span>{card.date.slice(0, 10) /* + " " + card.date.slice(11, 16) */}</span> </div>
		</article >)
		return cardsList
	}

	return (
		<div ref={divCards} className="cards">
			{console.log(cardSize(divCards))}
			{genarateCards(cardSize(divCards))}
		</div>
	)
}

export default PageCards