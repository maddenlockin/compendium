import React from 'react'
import { useState, useEffect } from "react";
import { fetchCards, fetchSelectedType, fetchSortOrder, fetchTypes } from '../../../services/cards';
import CardList from '../../CardList/CardList';
import Loader from 'react-loader-spinner';
import Controls from '../../Controls/Controls';

export default function Compendium() {
    const [loading, setLoading] = useState(true);
    const [card, setCards] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('all');
    const [sort, setSort] = useState();

    useEffect(() => {
        async function getCards() {
            const cardList = await fetchCards();
            setCards(cardList);
            setLoading(false);
        };
        getCards();
    }, []);

    useEffect(() => {
        async function getTypes() {
            const cardTypes = await fetchTypes();
            setTypes(cardTypes);
        };
        getTypes();
    }, [])

    useEffect(() => {
        async function getSelectedType() {
            if (!selectedType) return;

            setLoading(true);
            if (selectedType === 'all') {
                const cardList = await fetchCards();
                setCards(cardList)
            } else {
                const filteredCards = await fetchSelectedType(selectedType);
                setCards(filteredCards);
            }
            setLoading(false);
        };
        getSelectedType();
    }, [selectedType])

    useEffect(() => {
        async function sortCards() {
            //if (!sort) return;

            setLoading(true);
            if(sort === 'desc') {
                console.log('test', 'DESC', sort);
                const sortedCards = await fetchSortOrder(sort);
                await setCards(sortedCards);
            } else {
                const sortedCards = await fetchSortOrder('asc');
                setCards(sortedCards);
            // } else {
            //     const unsorted = await fetchCards();
            //     setCards(unsorted);
            }
            setLoading(false);
        }
        sortCards();
    }, [sort]);

    return (
        <>
            {loading ? (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            ) : (
            <div>
                <h2> Pokemon Card Compendium</h2>
                <Controls types={types} selectedType={selectedType} filterChange={setSelectedType} sort={sort} setSort={setSort} />
                <CardList cardList={card} />
            </div>
            )}
        </>
    );
}
