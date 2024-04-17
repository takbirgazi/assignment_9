import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";


const Cards = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div className="grid grid-cols-2 gap-5">
            {cards.map(card => <SingleCard cardInfo={card} key={card.id}></SingleCard>)}
        </div>
    );
};

export default Cards;