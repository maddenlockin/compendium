import React from 'react'
import { useState, useEffect } from "react";
import { fetchCards } from '../../../services/cards';
import CardList from '../../CardList/CardList';

export default function Compendium() {
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);
    // const [search, setSearch] = useState('');
    // const [types, setTypes] = useState([]);
    // const [selectedType, setSelectedType] = useState('all');
    // const [sort, setSort] = useState();
    // const [selectedSort, setSelectedSort] = useState(0);

    useEffect(() => {
        async function getCards() {
            const cardList = await fetchCards();
            setCards(cardList);
            setLoading(false);
        };
        getCards();
    }, [])

    return (
        <div>
            <h2> Yu-Gi-Oh Card Compendium</h2>
            <CardList cards={cards} />
        </div>
    )
}
