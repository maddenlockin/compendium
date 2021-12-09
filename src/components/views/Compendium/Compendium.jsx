import React from 'react'
import { useState, useEffect } from "react";
import { fetchCards } from '../../../services/cards';
import CardList from '../../CardList/CardList';
import Loader from 'react-loader-spinner';
//import Controls from '../../Controls/Controls';

export default function Compendium() {
    const [loading, setLoading] = useState(true);
    const [card, setCards] = useState([]);
    // const [search, setSearch] = useState('');
    //const [types, setTypes] = useState([]);
    //const [selectedType, setSelectedType] = useState('all');
    // const [sort, setSort] = useState();
    // const [selectedSort, setSelectedSort] = useState(0);

    useEffect(() => {
        async function getCards() {
            const cardList = await fetchCards();
            setCards(cardList);
            setLoading(false);
        };
        getCards();
    }, []);

    // useEffect(() => {
    //     async function getTypes() {
    //         const cardTypes = await fetchTypes();
    //         setTypes(cardTypes);
    //     };
    //     getTypes();
    // }, [])

    return (
        <>
            {loading ? (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            ) : (
            <div>
                <h2> Pokemon Card Compendium</h2>
                {/* <Controls types={types} selectedType={selectedType} filterChange={setSelectedType} /> */}
                <CardList cardList={card} />
            </div>
            )}
        </>
    );
}
