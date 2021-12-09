import React from 'react'
import PropTypes from 'prop-types';

export default function Card({ card }) {
    return (
        <figure aria-label={`pokemon card ${card.card}`}>
            <img src={card.url_image} alt={`$card.card`} />
            <div className="card-details">
                <h3 href={card.cardList}>{card.card}</h3>
                <p>Type 1:{card.type_1}</p>
                <p>Type 2:{card.type_2}</p>
                <p>Shape:{card.shape}</p>
                <p>Speed:{card.speed}</p>
            </div>
        </figure>
    );
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
            card: PropTypes.string.isRequired,
            cardList: PropTypes.string.isRequired,
            shape: PropTypes.string.isRequired,
            speed: PropTypes.string.isRequired,
            type_1: PropTypes.string.isRequired,
            type_2: PropTypes.string.isRequired,
            url_image: PropTypes.string.isRequired,
    }).isRequired,
};