import React from 'react'
import PropTypes from 'prop-types';

export default function Card({ card }) {
    return (
        <figure aria-label={`yu-gi-oh card ${card.card}`}>
            <img src={card.url_image} alt={`$card.card`} />
            <div className="card-details">
                <h3 href={card.cardList}>{card.card}</h3>
                <p>Archetype:{card.archetype}</p>
                <p>Race:{card.race}</p>
                <p>Type:{card.type}</p>
                <p>Description:{card.desc}</p>
            </div>
        </figure>
    );
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        card: PropTypes.string.isRequired,
        cardList: PropTypes.string.isRequired,
        archetype: PropTypes.string.isRequired,
        race: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        url_image: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
};