import { render, screen } from "@testing-library/react"
import CardList from "./CardList";

it('should render a list of pokemon cards', () => {
    render(
        <CardList 
            cardList={[
                {
                    id: 214,
                    pokemon: "murkrow",
                    url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png",
                    type_1: 'dark',
                    type_2: 'flying',
                    shape: 'wings',
                    speed: 91,
                },
                {
                    id: 142,
                    pokemon: "gyarados-mega",
                    url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/130_f2.png",
                    type_1: 'water',
                    type_2: 'dark',
                    shape: 'NA',
                    speed: 81,
                }
            ]}
        />
    );

    const cardList = screen.getByRole('list', { name: 'list of pokemon cards' });
    expect(cardList).toMatchSnapshot();
})