

// const cardMunger = (card) => {
//     return {
//         id: card.id,
//         name: card.card,
//         archetype: card.archetype,
//         race: card.race,
//         type: card.type,
//         img: card.url_image,
//         description: card.desc,
//     };
// };

const fetchCards = async () => {
    const results = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);

    const cardData = await results.json();

    return cardData.results;
};

const fetchTypes = async () => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);

    const cardTypes = await res.json();

    return cardTypes;
}

//     const randomTypes = types
//         // issue with types being strings below. 
//         .map((cardType) => ({type: cardType.type}))
//         // get random types
//         .sort(() => 0.2 - Math.random())
//         // take the first 5 of the random types
//         .slice(0, 5);
//         return randomTypes;
// }
    //const results = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${type}`);


export { fetchCards, fetchTypes }

;