

const cardMunger = (card) => {
    return {
        id: card.id,
        name: card.card,
        archetype: card.archetype,
        race: card.race,
        type: card.type,
        img: card.url_image,
        description: card.desc,
    };
};

const fetchCards = async () => {
    const allCards = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);

    const cardData = await allCards.json();
    
    return cardData.results;
} 

export { cardMunger, fetchCards }

;