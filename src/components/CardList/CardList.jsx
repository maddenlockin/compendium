import React from 'react';
import Card from '../Card/Card';
import PropTypes from "prop-types";

export default function CardList({ cardList }) {
    console.log('test', cardList)
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
    cardList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            pokemon: PropTypes.string.isRequired,
        })
    ).isRequired,
};

