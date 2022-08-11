
import React from "react";
import { Link } from "react-router-dom";

const PageCards = (props) => {
	let cards = props.cards
	let cardsList = cards.map(card =>
		<article key={card.id} className="article" >
			<div className="article-imagecontainer">
				<img className="article__image" src={card.image} alt={card.title} />
			</div>
			<div className="article__text">
				<Link to={"/" + card.link.slice(29)} >
					<h4>{card.title}</h4>
				</Link>
				<div className="article__preview">{card.preview.slice(0, 250)}  </div>
				<hr />
				<div className="article__footer">
					<div className="article__data">{card.date.slice(0, 10)} </div>
					<div className="article__moreinfo">
						<Link to={"/" + card.link.slice(29)}>Далее»</Link>
					</div>
				</div>
			</div>
		</article >)

	return (
		<div className="cards-container">
			{cardsList}
		</div>
	)
}

export default PageCards