import React from 'react'
import { useState, useEffect } from "react";
import { fetchCards } from '../../../services/cards';
import CardList from '../../CardList/CardList';
import Loader from 'react-loader-spinner';

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

    if (loading) {
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
    }

    return (
        <div>
            <h2> Yu-Gi-Oh Card Compendium</h2>
            <CardList cards={cards} />
        </div>
    )
}
