import React from "react";

const PageCards = (props) => {

	let cards = props.cards

	let cardsList = cards.map(card => <article key={card.id} className="article" >
		<img className="article__image" src={card.image} alt={card.title} />
		<div className="article__text">
			<a href={card.link} target="_blank" rel="noopener noreferrer" ><h4>{card.title}</h4></a>
			<div className="article__preview">{card.preview.slice(0, 250)}  </div>
			<hr />
			<div className="article__footer">
				<div className="data">{card.date.slice(0, 10)} </div>
				<div className="moreinfo"><a href={card.link} target="_blank" rel="noopener noreferrer" >Далее»</a></div>
			</div>

		</div>

	</article >)


	return (
		<div className="cards">
			{cardsList}
		</div>
	)
}

export default PageCards