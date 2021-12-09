import React from 'react';
import Card from '../Card/Card';
import PropTypes from "prop-types";

export default function CardList({ cardList }) {
    return (
        <ul aria-label='list of pokemon cards' className= 'cardList'>
            {cardList.map((card) => {
                return (
                    <li key={card.pokemon} className='item'>
                        <Card card={card} />
                    </li>
                );
            })}
        </ul>
    );
}

CardList.propTypes = {
    card: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            pokemon: PropTypes.string.isRequired,
            cardList: PropTypes.string.isRequired,
            shape: PropTypes.string.isRequired,
            speed: PropTypes.number.isRequired,
            type_1: PropTypes.string.isRequired,
            type_2: PropTypes.string.isRequired,
            url_image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

