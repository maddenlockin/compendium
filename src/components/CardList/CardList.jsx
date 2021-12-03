import React from 'react';
import Card from '../Card/Card';
import PropTypes from "prop-types";

export default function CardList({ cardList }) {
    return (
        <ul aria-label='list of yu-gi-oh cards' className= 'cardList'>
            {cardList.map((card) => {
                return (
                    <li key={card.id} className='item'>
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
            card: PropTypes.string.isRequired,
            cardList: PropTypes.string.isRequired,
            archetype: PropTypes.string.isRequired,
            race: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            url_image: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

