

const fetchCards = async () => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=asc`);

    const cardData = await res.json();

    return cardData.results;
};

const fetchTypes = async () => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);

    const cardTypes = await res.json();

    return cardTypes;
}

const fetchSelectedType = async (type) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`);

    const filteredCards = await res.json();
    console.log(filteredCards);
    return filteredCards.results;
}

const fetchSortOrder = async (sort) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${sort}`);
    console.log('test', sort)
    const sortedCards = await res.json();
    console.log('test', sortedCards.results);
    return sortedCards.results;
}


export { fetchCards, fetchTypes, fetchSelectedType, fetchSortOrder }

;